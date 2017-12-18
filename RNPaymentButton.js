'use strict';

import PropTypes from 'prop-types';
import React from 'react'
import { requireNativeComponent } from 'react-native'

export default class RNPaymentButton extends React.Component {
    _onTouchUpInside = (event) => {
        if (!this.props.onTouchUpInside) {
            return;
        }

        // process raw event...
        this.props.onTouchUpInside(event.nativeEvent);
    };

    render() {
        return (<RNPaymentButtonIOS {... this.props} onTouchUpInside={this._onTouchUpInside}/>)
    }
}

RNPaymentButton.propTypes = {
    type: PropTypes.string,
    colorStyle: PropTypes.string,
    onTouchUpInside: PropTypes.func
};

// requireNativeComponent automatically resolves 'RNPaymentButton' to 'RNPaymentButtonManager'
let RNPaymentButtonIOS = requireNativeComponent('RNPaymentButton', RNPaymentButton);