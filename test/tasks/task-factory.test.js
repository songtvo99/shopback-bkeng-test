'use strict';



const {
    expect
} = require('chai');

let factory = null;

describe('TaskFactory Test ', () => {

    before(() => {
        const TaskFactory = require('../../app/tasks/task-factory');
        factory = new TaskFactory();
    });

    context('Test case for Spend ', () => {

        it(' Test load number task ', () => {
            expect(factory).to.not.null;
        });

    });

});