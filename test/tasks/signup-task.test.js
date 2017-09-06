'use strict';

const SignupTask = require('../../app/tasks/signup-task');

const {
    expect
} = require('chai');

let signupTask = null;

describe('Signup Task Test ', () => {

    before(() => {
        signupTask = new SignupTask();
    });

    context('Test case for Spend ', () => {

        it('Signup Task when www.shopback.sg it should shows Award bonus: 5.00 SGD ', () => {
            expect(signupTask.doProcess('www.shopback.sg')).to.have.string('Award bonus: 5.00 SGD');
        });

        it('Signup Task when www.shopback.my it should shows Award bonus: 10.00 MYR ', () => {
            expect(signupTask.doProcess('www.shopback.my')).to.have.string('Award bonus: 10.00 MYR');
        });

    });

});