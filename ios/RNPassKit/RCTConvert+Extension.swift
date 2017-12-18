//
//  RCTConvert+Extension.swift
//  ReactNativePlayground
//
//  Created by Moisei Alexandru on 18/12/2017.
//  Copyright © 2017 YNAP. All rights reserved.
//

import Foundation
import PassKit
import React

extension RCTConvert {
    @objc(PKPaymentNetworkArray:)
    class func PKPaymentNetworkArray(json: Any) -> [PKPaymentNetwork] {
        return nsArray(json).flatMap {
            guard let network = $0 as? String else { return nil }
            switch network {
            case "amex": return .amex
            case "cartesBancaires": if #available(iOS 11.2, *) { return .cartesBancaires }
            case "chinaUnionPay": if #available(iOS 9.2, *) { return .chinaUnionPay }
            case "discover": return .discover
            case "idCredit": if #available(iOS 10.3, *) { return .idCredit }
            case "interac": if #available(iOS 9.2, *) { return .interac }
            case "JCB": if #available(iOS 10.1, *) { return .JCB }
            case "masterCard": return .masterCard
            case "privateLabel": return .privateLabel
            case "quicPay": if #available(iOS 10.3, *) { return .quicPay }
            case "suica": if #available(iOS 10.1, *) { return .suica }
            case "visa": return .visa
            default: return nil
            }
            return nil
        }
    }
}
