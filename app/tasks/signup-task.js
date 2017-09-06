/**
 * Created by apple on 9/5/17.
 * Award corresponding bonus amount with currency for each of:
 * 
    www.shopback.sg => SGD 5 
    www.shopback.my => MYR 10 
    www.shopback.co.id => IDR 25.000 
    www.shopback.com.tw => TWD 1000 
    www.myshopback.co.th => THB 500 
    www.myshopback.com => USD 5
 */
'use strict';

const Util = require('../utils/utilities');
const Settings = require('../utils/settings')
const Task = require('./task');

class SignupTask extends Task {

    get name() {
        return 'signup';
    }

    doProcess(domainName) {
        const lcDomainName = domainName.toLowerCase();
        const bonusData = Settings.signupBonus()
        if (lcDomainName in bonusData) {
            const bonusObj = bonusData[lcDomainName];
            return `Award bonus: ${Util.numberToFixed(bonusObj.bonus, 2)} ${bonusObj.currency}`;
        }

        return 'No award bonus';
    }

}

module.exports = SignupTask;