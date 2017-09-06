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

    context('Test case for TaskFactory ', () => {

        it(' Test load number task in invalid folder must be throw exception ', () => {
            factory.init('/asdasd').then(() => {
                expect(err).to.be.false;
            }).catch((err) => {
                expect(err).to.be.not.null;
            });
        });

        it(' Test load number task in folder task must be load ', () => {
            factory.init('.').then(() => {
                expect(factory.getCommandInTaskLoaded().length).to.be.eq(3);
            }).catch((err) => {
                expect().to.be.false;
            });
        });

    });

});