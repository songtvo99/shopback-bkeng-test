'use strict';

const sinon = require('sinon');
const {
    expect
} = require('chai');

const sandbox = sinon.sandbox.create();
const SettingsPrototype = {
    getTask(taskname) {
        if (!taskname) {
            sandbox.stub();
        }
        return null;
    }
};

let mainapp = null;

describe(' Main App test with execute as main function ', () => {

    before(() => {
        const MainApp = require('../app/main-app')
        mainapp = new MainApp(SettingsPrototype);
    });

    context('execute', () => {
        it('when input array is empty should be return Please input valid parameters ', () => {
            const inputFromCli = [];
            const expectedMessage = 'Please input valid parameters';
            expect(mainapp.execute(inputFromCli)).to.be.string(expectedMessage);
        });

        it('when input array is null should be Please input valid parameters', () => {
            const inputFromCli = null;
            const expectedMessage = 'Please input valid parameters';
            expect(mainapp.execute(inputFromCli)).to.be.string(expectedMessage);
        });

        it('when task doest not existed in system ', () => {
            const inputFromCli = ['task'];
            const expectedMessage = 'Command Not Exist';
            expect(mainapp.execute(inputFromCli)).to.be.string(expectedMessage);
        });

    });
});