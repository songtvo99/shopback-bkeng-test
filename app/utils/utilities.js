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

        numbers.map((i, index) => {
            const num = Number(i);
            if (index === 0) {
                highest = num;
                lowest = num;
            } else if (num > highest) {
                highest = num;
            } else if (num < lowest) {
                lowest = num;
            }
        })

        return {
            highest,
            lowest
        };
    }

}

module.exports = Util;