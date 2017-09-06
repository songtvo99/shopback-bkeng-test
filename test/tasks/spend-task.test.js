'use strict';

const SpendTask = require('../../app/tasks/spend-task');

const {
    expect
} = require('chai');

let spendTask = null;

describe('Spend Task Test ', () => {

    before(() => {
        spendTask = new SpendTask();
    });

    context('Test case for Spend ', () => {

        it('Spend Task when [10, 10, 10] will show value is 1 ', () => {
            expect(spendTask.doProcess(...['10', '10', '10'])).to.have.string('Award cashback: 1.00');
        });

        it('Spend Task will show value is ', () => {
            expect(spendTask.doProcess(...['20', '10', '15'])).to.have.string('Award cashback: 2.00');
        });

        it('Spend Task will show value is ', () => {
            expect(spendTask.doProcess(...['100', '5'])).to.have.string('Award cashback: 5.00');
        });


        it('Spend Task when [0] will show value is no cashback ', () => {
            expect(spendTask.doProcess(...['0'])).to.have.string('No cashback');
        });

        it('when [20] will show value is 3.00 ', () => {
            expect(spendTask.doProcess(...['20'])).to.have.string('Award cashback: 3.00');
        });

        it('when [] will show value is no cashback ', () => {
            expect(spendTask.doProcess(...[])).to.have.string('No cashback');
        });

    });

});