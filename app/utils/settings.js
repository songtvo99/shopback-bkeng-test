/**
 * Created by apple on 9/5/17.
 */

'use strict';

const RedeemMapping = {
    'www.shopback.sg': 'https://www.shopback.sg',
    'www.shopback.my': 'https://www.shopback.my',
    'www.shopback.co.id': 'https://www.shopback.co.id',
    'www.shopback.com.tw': 'https://www.shopback.com.tw',
    'www.myshopback.co.th': 'https://www.myshopback.co.th',
    'www.shopback.com': 'https://www.shopback.com'
};

const SignupBonusData = {
    'www.shopback.sg': {
        bonus: 5,
        currency: 'SGD'
    },
    'www.shopback.my': {
        bonus: 10,
        currency: 'MYR'
    },
    'www.shopback.co.id': {
        bonus: 25000,
        currency: 'IDR'
    },
    'www.shopback.com.tw': {
        bonus: 1000,
        currency: 'TWD'
    },
    'www.myshopback.co.th': {
        bonus: 500,
        currency: 'THB'
    },
    'www.myshopback.com': {
        bonus: 5,
        currency: 'USD'
    }
};

class Settings {

    static redeemMapping () {
        return RedeemMapping;
    }

    static signupBonus () {
        return SignupBonusData;
    }

}

module.exports = Settings;