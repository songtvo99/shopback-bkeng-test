/**
 * Created by apple on 9/5/17.
 */
'use strict';

const Task = require('./task');
const Settings = require('../utils/settings');

class RedeemTask extends Task {

    get name() {
        return 'redeem';
    }

    doProcess(domainName) {
        const lcDomainName = domainName.toLowerCase();
        const domainMapping = Settings.redeemMapping();

        if (lcDomainName in domainMapping) {
            const result = domainMapping[lcDomainName];
            return `Visit ${result} to start earning cashback!`;
        }

        return 'Not found';
    }

}

module.exports = RedeemTask;