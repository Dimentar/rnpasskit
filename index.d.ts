import * as React from "react";
import {StyleProp, TextStyle} from 'react-native'

export type RNPaymentButtonType = 'plain' | 'buy' | 'setUp' | 'inStore' | 'donate'
export type RNPaymentButtonStyle = 'white' | 'whiteOutline' | 'black'

export interface RNPaymentButtonProps {
    type: RNPaymentButtonType
    colorStyle: RNPaymentButtonStyle
    onTouchUpInside: Function
    /**
     * Additional styling for Button
     */
    style?: StyleProp<TextStyle>;
}

export class RNPaymentButton extends React.Component<RNPaymentButtonProps, any> {}