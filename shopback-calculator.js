/**
 * Created by apple on 9/4/17.
 */

const MainApp = require('./app/main-app');
const logger = require('./app/utils/logger');
const TaskFactory = require('./tasks/task-factory');
const taskDir = '.';

var app = new MainApp(new TaskFactory());

app.factory.init(taskDir)
    .then(() => {
        const args = [...process.argv].splice(2);
        return args;
    }).then((cli) => {
        return app.execute(cli);
    }).then((value) => {
        console.log(value);
    }).catch((err) => logger.error(err));