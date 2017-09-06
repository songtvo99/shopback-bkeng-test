'use strict';

const Task = require('../../app/tasks/task');
const RedeemTask = require('../../app/tasks/redeem-task');
const SignUpTask = require('../../app/tasks/signup-task');
const SpendTask = require('../../app/tasks/spend-task');

const {
    expect
} = require('chai');

describe('Common Task ', () => {
    context('Task can not use directly but concrete class can init successfully ', () => {
        it('new Task will throw error', () => {
            expect(() => new Task()).to.throw(TypeError);
        });

        it('Redeem Task can use directly and create successfully', () => {
            expect(() => new RedeemTask).to.not.throw;
        });

        it('SignUp Task can use directly and create successfully', () => {
            expect(() => new SignUpTask).to.not.throw;
        });

        it('Spend Task can use directly and create successfully', () => {
            expect(() => new SpendTask).to.not.throw;
        });

    });

});