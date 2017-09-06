/**
 * Created by apple on 9/5/17.
 */
'use strict';

const TaskFactory = require('./tasks/task-factory');


class MainApp {

    constructor() {
        this.taskFactory = new TaskFactory();
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

        if (!taskname || !task) {
            return 'Invalid parameters to execute';
        }

        return task.doProcess(...input);

    }

}

module.exports = MainApp;