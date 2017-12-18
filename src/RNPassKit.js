import * as React from 'react'
import { NativeModules } from 'react-native'
import PropTypes from 'prop-types';

let RNPassKitBridge = NativeModules.RNPassKit;

export default class RNPassKit {
    canMakePayments = RNPassKitBridge.canMakePayments;

    prepareRequest() {
        RNPassKitBridge.prepareRequest();
    }

    present() {
        RNPassKitBridge.present();
    }

    openPaymentSetup() {
        RNPassKitBridge.openPaymentSetup();
    }
}

RNPassKit.propTypes = {
    canMakePayments: bool,
    prepareRequest: PropTypes.func,
    present: PropTypes.func,
    openPaymentSetup: PropTypes.func,
};