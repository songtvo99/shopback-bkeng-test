/**
 * Created by apple on 9/5/17.
 */
'use strict';
const {
    expect
} = require('chai');

describe('Your test Group name', () => {
    context('test sub group', () => {
        it('should pass the test', () => {
            expect(true).to.be.true;
        });
    });
});