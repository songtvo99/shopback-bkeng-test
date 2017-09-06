/**
 * Created by apple on 9/5/17.
 * Return cashback awarded rounded to 2 decimal places. Either:
    award 20% of the highest amount if every single amount is >= 50; 
    award 15% of the highest amount if every single amount are >= 20; 
    award 10% of the highest if all amounts are >= 10;
    or award 5% of the highest as cashback
 */

'use strict';

const Util = require('../utils/utilities');
const Task = require('./task');

class SpendTask extends Task {

    get name() {
        return 'spend';
    }

    doProcess(...amounts) {
        const cashback = this.findCashbackValue(amounts);

        if (cashback === 0) {
            return 'No cashback';
        }

        return `Award cashback: ${Util.numberToFixed(cashback, 2)}`;
    }

    findCashbackValue(amounts) {
        const pairData = Util.findPairValue(amounts);

        if (pairData.lowest < 10) {
            return (5 * pairData.highest) / 100;
        }

        if (pairData.lowest < 20) {
            return (10 * pairData.highest) / 100;
        }

        if (pairData.lowest < 50) {
            return (15 * pairData.highest) / 100;
        }

        return (20 * pairData.highest) / 100;
    }

}

module.exports = SpendTask;