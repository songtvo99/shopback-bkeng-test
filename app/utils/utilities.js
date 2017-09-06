/**
 * Created by apple on 9/5/17.
 */
'use strict'
const logger = require('./logger')

class Util {

    static numberToFixed(number, fixed) {
        if (typeof number === 'number') {
            return number.toFixed(fixed);
        }
        return null;
    }

    static findPairValue(numbers) {
        let highest = 0;
        let lowest = 0;
        var isFirst = true;
        numbers.map((i, index) => {
            const num = Number(i);
            if (!Number.isNaN(i) && num > 0) {
                if (isFirst) {
                    highest = num;
                    lowest = num;
                    isFirst = false;
                } else if (num > highest) {
                    highest = num;
                } else if (num < lowest) {
                    lowest = num;
                }
            }
        })

        return {
            highest,
            lowest
        };
    }

}

module.exports = Util;