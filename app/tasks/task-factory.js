/**
 * Created by apple on 9/5/17.
 */
'use strict';

const logger = require('../utils/logger')
const path = require('path');
const fs = require('fs');

const _container = {};

class TaskFactory {

    init(dir) {
        return new Promise((invoke, reject) => {
            const dirPath = path.join(__dirname, dir);
            try {
                const files = fs.readdirSync(dirPath);
                files.forEach((f) => {
                    if (f.endsWith('-task.js')) {
                        const TaskClass = require(path.join(dirPath, f));
                        const instance = new TaskClass();
                        _container[instance.name] = instance;
                    }
                });

                logger.info(`Number tasks was loaded ${Object.keys(_container).length}`);

            } catch (err) {
                logger.error(err);
                return reject(err);
            }

            return invoke();
        });
    }

    getCommandInTaskLoaded() {
        return Object.keys(_container);
    }

    getTaskByCommand(taskname) {
        if (taskname in _container) {
            return _container[taskname];
        }

        return null;
    }

}

module.exports = TaskFactory;