'use strict';

class Task {
    constructor() {
        if (this.constructor === Task) {
            throw TypeError('Task is abstract can not be used directly');
        }

        if (this['name'] === undefined) {
            throw TypeError('Task has a unique name');
        }

        if (typeof this.doProcess !== 'function') {
            throw TypeError('Task need implement doProcess(context) function ');
        }

    }
}

module.exports = Task;