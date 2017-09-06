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

        it('Spend Task when input is [10, 10, 10] it should be Award cashback: 1.00', () => {
            expect(spendTask.doProcess(...['10', '10', '10'])).to.have.string('Award cashback: 1.00');
        });

        it('Spend Task when input is [20, 10, 15] it should be Award cashback: 2.00 ', () => {
            expect(spendTask.doProcess(...['20', '10', '15'])).to.have.string('Award cashback: 2.00');
        });

        it('Spend Task when input is [100, 5] it should be Award cashback: 5.00 ', () => {
            expect(spendTask.doProcess(...['100', '5'])).to.have.string('Award cashback: 5.00');
        });

        it('Spend Task when input is [0] it should be No cashback', () => {
            expect(spendTask.doProcess(...['0'])).to.have.string('No cashback');
        });

        it('Spend Task when input is [20] it should be Award cashback: 3.00', () => {
            expect(spendTask.doProcess(...['20'])).to.have.string('Award cashback: 3.00');
        });

        it('when [] will show value is no cashback ', () => {
            expect(spendTask.doProcess(...[])).to.have.string('No cashback');
        });

        it('when [a, 100] will show value Award cashback: 20.00 ', () => {
            expect(spendTask.doProcess(...['a', '100'])).to.have.string('Award cashback: 20.00');
        });

        it('when [100, a] will show value Award cashback: 20.00 ', () => {
            expect(spendTask.doProcess(...['100', 'a'])).to.have.string('Award cashback: 20.00');
        });

    });

});