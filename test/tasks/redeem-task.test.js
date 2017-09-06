'use strict';


const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const {
    expect
} = require('chai');

const sandbox = sinon.sandbox.create();
const SettingsPrototype = {
    redeemMapping: sandbox.stub()
};
const StubOptions = {
    '../utils/settings': SettingsPrototype
};

let instance;
describe('Mockup Setting class for Redeem task', () => {
    before(() => {
        const RedeemTask = proxyquire('../../app/tasks/redeem-task.js', StubOptions);
        instance = new RedeemTask();
    });

    afterEach(() => {
        sandbox.reset();
    });

    context('doProcess()', () => {
        it('should call redeemMapping', () => {
            SettingsPrototype.redeemMapping.returns([]);
            instance.doProcess('domain');
            expect(SettingsPrototype.redeemMapping.calledOnce).to.be.true;
        });

    });
});

describe(' Redeem Task test functions ', () => {
    before(() => {
        const RedeemTask = require('../../app/tasks/redeem-task.js');
        instance = new RedeemTask();
    });

    context(' Test functions in RedeemTask ', () => {
        it('if value is www.shopback.sg then is return mapping https://www.shopback.sg ', () => {
            let value = 'https://www.shopback.sg';
            expect(instance.doProcess('www.shopback.sg')).to.be.have.string(`Visit ${value} to start earning cashback!`);
        });

        it('if value is www.shopback.my then is return mapping https://www.shopback.my', () => {
            let value = 'https://www.shopback.my';
            expect(instance.doProcess('www.shopback.my')).to.be.have.string(`Visit ${value} to start earning cashback!`);
        });

    });

});