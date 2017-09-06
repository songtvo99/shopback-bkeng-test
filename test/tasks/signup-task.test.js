'use strict';

const SignupTask = require('../../app/tasks/signup-task');

const {
    expect
} = require('chai');

let signupTask = null;

describe('Spend Task Test ', () => {

    before(() => {
        signupTask = new SignupTask();
    });

    context('Test case for Spend ', () => {

        it('Signup Task when [0] will show value is no cashback ', () => {
            expect(signupTask.doProcess('www.shopback.sg')).to.have.string('Award bonus: 5.00 SGD');
        });

        it('when [20] will show value is 3.00 ', () => {
            expect(signupTask.doProcess('www.shopback.my')).to.have.string('Award bonus: 10.00 MYR');
        });

    });

});