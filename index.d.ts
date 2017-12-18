import * as React from 'react'
import {StyleProp, TextStyle} from 'react-native'

export type RNPaymentButtonType = 'plain' | 'buy' | 'setUp' | 'inStore' | 'donate'
export type RNPaymentButtonStyle = 'white' | 'whiteOutline' | 'black'

export interface RNPaymentButtonProps {
    type: RNPaymentButtonType
    colorStyle: RNPaymentButtonStyle

    /**
     * Touch action
     */
    onTouchUpInside?: Function

    /**
     * Additional styling for Button
     */
    style?: StyleProp<TextStyle>;
}

/**
 * RNPaymentButton UI Element
 */
export class RNPaymentButton extends React.Component<RNPaymentButtonProps, any> {}


// PassKit Wrapper
export type PKPaymentNetwork = 'amex' | 'cartesBancaires' | 'chinaUnionPay' | 'discover' | 'idCredit' | 'interac' | 'JCB' | 'masterCard' | 'privateLabel' | 'quicPay' | 'suica' | 'visa'

export interface PrepareRequestProps {
    supportedPaymentNetworks?: Array<PKPaymentNetwork>
    merchantId?: string
}

export class RNPassKit {
    static canMakePayments: boolean;
    static canMakePaymentsWith(supportedPaymentNetworks: Array<PKPaymentNetwork>, callback: (response: Array<any>) => void): Function;
    static prepareRequest(options: PrepareRequestProps, callback: (response: Array<any>) => void): Function;
    static present(): Function;
    static openPaymentSetup(): Function;
}