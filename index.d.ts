declare module 'react-native-passkit' {
    import * as React from "react";

    interface RNPaymentButtonProps {
        type: 'plain' | 'buy' | 'setUp' | 'inStore' | 'donate'
        colorStyle: 'white' | 'whiteOutline' | 'black'
        onTouchUpInside: Function
    }

    export default class RNPaymentButton extends React.Component<RNPaymentButtonProps, any> {}
}