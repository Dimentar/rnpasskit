//
//  RNPaymentButton.swift
//  ReactNativePlayground
//
//  Created by Moisei Alexandru on 14/12/2017.
//  Copyright © 2017 YNAP. All rights reserved.
//

import UIKit
import PassKit
import React

@objc(RNPaymentButton)
open class RNPaymentButton: UIView {
    var paymentButton: PKPaymentButton!
    var type: PKPaymentButtonType = .buy
    var colorStyle: PKPaymentButtonStyle = .black
    var onTouchUpInside: RCTBubblingEventBlock?
    
    init() {
        super.init(frame: CGRect.zero)
        commonCreate()
    }
    
    required public init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override open func layoutSubviews() {
        super.layoutSubviews()
        paymentButton.frame = bounds
    }
    
    @objc
    open func setType(_ type: PKPaymentButtonType) {
        self.type = type
        commonCreate()
    }
    
    @objc
    open func setColorStyle(_ colorStyle: PKPaymentButtonStyle) {
        self.colorStyle = colorStyle
        commonCreate()
    }
    
    @objc
    open func setOnTouchUpInside(_ onTouchUpInside: RCTBubblingEventBlock?) {
        self.onTouchUpInside = onTouchUpInside
    }
    
    fileprivate func commonCreate() {
        paymentButton?.removeFromSuperview()
        paymentButton = PKPaymentButton(paymentButtonType: type, paymentButtonStyle: colorStyle)
        paymentButton.addTarget(self, action: #selector(handleTouchUpInside), for: .touchUpInside)
        addSubview(paymentButton)
        setNeedsLayout()
    }
    
    @objc
    func handleTouchUpInside() {
        onTouchUpInside?(nil)
    }
}
