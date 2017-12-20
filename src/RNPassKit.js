import * as React from 'react'
import { NativeModules } from 'react-native'
import PropTypes from 'prop-types';

let RNPassKitBridge = NativeModules.RNPassKit;

export default class RNPassKit {
    static canMakePayments: PropTypes.bool = RNPassKitBridge.canMakePayments;

    static canMakePaymentsUsingNetworks(networks, callback) {
        RNPassKitBridge.canMakePaymentsUsingNetworks(networks, callback);
    }

    static prepareRequest(args, callback) {
        RNPassKitBridge.prepareRequest(args, callback);
    }

    static present() {
        RNPassKitBridge.present();
    }

    static openPaymentSetup() {
        RNPassKitBridge.openPaymentSetup();
    }
}

RNPassKit.propTypes = {
    canMakePayments: PropTypes.bool,
    canMakePaymentsUsingNetworks: PropTypes.func,
    prepareRequest: PropTypes.func,
    present: PropTypes.func,
    openPaymentSetup: PropTypes.func,
};