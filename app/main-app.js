/**
 * Created by apple on 9/5/17.
 */
'use strict';

class MainApp {

    constructor(taskFactory) {
        this.taskFactory = taskFactory;
    }

    get factory() {
        return this.taskFactory;
    }

    execute(cli) {

        if (!cli || cli.length === 0) {
            return 'Please input valid parameters';
        }

        const input = Object.create(cli);
        const taskname = input.shift().toLowerCase();
        const task = this.factory.getTask(taskname);

        if (!taskname) {
            return 'Invalid parameters to execute';
        }

        if (!task && (typeof task.doProcess !== 'function')) {
            return task.doProcess(...input);
        }

        return 'Command Not Exist';
    }
}

module.exports = MainApp;