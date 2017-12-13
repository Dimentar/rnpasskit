//
//  RNPassKit.swift
//  ReactNativePlayground
//
//  Created by Moisei Alexandru on 13/12/2017.
//  Copyright © 2017 YNAP. All rights reserved.
//

import Foundation
import PassKit
import React

@objc(RNPassKit)
class RNPassKit: RCTEventEmitter {
    var paymentRequest: PKPaymentRequest?
}

extension RNPassKit {
    override func constantsToExport() -> [AnyHashable : Any]! {
        return [
            "canMakePayments": PKPaymentAuthorizationViewController.canMakePayments(),
            "PKPaymentNetwork" : [ PKPaymentNetwork.amex, PKPaymentNetwork.masterCard, PKPaymentNetwork.visa ]
        ]
    }
    
    override func supportedEvents() -> [String]! {
        return []
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

extension RNPassKit {
    func applePayButton() {
        guard PKPaymentAuthorizationViewController.canMakePayments() else { return }
        
        let supportedPaymentNetworks = [PKPaymentNetwork.visa, PKPaymentNetwork.masterCard, PKPaymentNetwork.amex]
        
        if PKPaymentAuthorizationViewController.canMakePayments(usingNetworks: supportedPaymentNetworks) {
            _ = PKPaymentButton(paymentButtonType: .buy, paymentButtonStyle: .black)
        } else {
            _ = PKPaymentButton(paymentButtonType: .setUp, paymentButtonStyle: .black)
        }
    }
    
    @objc(prepareRequest:callback:)
    func prepareRequest(options: [String: Any], callback: RCTResponseSenderBlock?) {
        let request = PKPaymentRequest()
        request.merchantIdentifier = (options["merchantId"] as? String) ?? ""
        request.supportedNetworks = (options["supportedPaymentNetworks"] as? [PKPaymentNetwork]) ?? []
        request.merchantCapabilities = PKMerchantCapability.capability3DS
        request.countryCode = "IT"
        request.currencyCode = "EUR"
        request.shippingMethods = createShippingMethod()
        request.paymentSummaryItems = createItemPaymentSummaryItems()
        request.billingContact = createContactBillingContact()
        request.shippingContact = createContactShippingContact()
        
        paymentRequest = request
        callback?([NSNull()])
    }
    
    @objc(openPaymentSetup)
    func openPaymentSetup() {
        DispatchQueue.main.async {
            PKPassLibrary().openPaymentSetup()
        }
    }
    
    @objc(present)
    func present() {
        DispatchQueue.main.async {
        guard let paymentRequest = self.paymentRequest else { return }
        guard let applePayController = PKPaymentAuthorizationViewController(paymentRequest: paymentRequest) else { return }
        applePayController.delegate = self
        let rootVC = UIApplication.shared.delegate?.window??.rootViewController
        rootVC?.present(applePayController, animated: true, completion: nil)
        }
    }
    
    @objc(createContactBillingContact)
    func createContactBillingContact() -> PKContact {
        let address = CNMutablePostalAddress()
        address.country = "Italy"
        address.city = "Zola Predosa"
        address.postalCode = "40069"
        address.street = "Via Nannetti, 1"
        address.isoCountryCode = "IT"
        
        var person = PersonNameComponents()
        person.givenName = "BillingName"
        person.familyName = "BillingSurname"
        
        let contact = PKContact()
        contact.name = person
        contact.emailAddress = "test@billing.it"
        contact.phoneNumber = CNPhoneNumber(stringValue: "123456")
        contact.postalAddress = address
        
        return contact
    }
    
    @objc(createContactShippingContact)
    func createContactShippingContact() -> PKContact {
        let address = CNMutablePostalAddress()
        address.country = "Italy"
        address.city = "Ferrara"
        address.postalCode = "44120"
        address.street = "Viale Cavour, 1"
        address.isoCountryCode = "IT"
        
        var person = PersonNameComponents()
        person.givenName = "ShippingName"
        person.familyName = "ShippingSurname"
        
        let contact = PKContact()
        contact.name = person
        contact.emailAddress = "test@shipping.it"
        contact.phoneNumber = CNPhoneNumber(stringValue: "987654")
        contact.postalAddress = address
        
        return contact
    }
    
    @objc(createShippingMethod)
    func createShippingMethod() -> [PKShippingMethod] {
        let shippingMethod = PKShippingMethod(label: "Free Delivery", amount: NSDecimalNumber.zero)
        shippingMethod.identifier = "ShippingMethodId"
        shippingMethod.detail = "Shipping Details"
        
        return [shippingMethod]
    }
    
    @objc(createItemPaymentSummaryItems)
    func createItemPaymentSummaryItems() -> [PKPaymentSummaryItem] {
        return [
            PKPaymentSummaryItem(label: "Brand Name", amount: NSDecimalNumber(value: 1234.5)),
            PKPaymentSummaryItem(label: "Worldrobe", amount: NSDecimalNumber(value: 1234.5))
        ]
    }
}

extension RNPassKit: PKPaymentAuthorizationViewControllerDelegate {
    func paymentAuthorizationViewControllerDidFinish(_ vc: PKPaymentAuthorizationViewController) {
        vc.dismiss(animated: true, completion: nil)
    }
    
    func paymentAuthorizationViewController(_: PKPaymentAuthorizationViewController, didSelect _: PKPaymentMethod, completion: @escaping ([PKPaymentSummaryItem]) -> Void) {
        completion(createItemPaymentSummaryItems())
    }
    
    func paymentAuthorizationViewController(_: PKPaymentAuthorizationViewController, didSelect _: PKShippingMethod, completion: @escaping (PKPaymentAuthorizationStatus, [PKPaymentSummaryItem]) -> Void) {
        completion(.success, createItemPaymentSummaryItems())
    }
    
    func paymentAuthorizationViewController(_: PKPaymentAuthorizationViewController, didSelectShippingContact _: PKContact, completion: @escaping (PKPaymentAuthorizationStatus, [PKShippingMethod], [PKPaymentSummaryItem]) -> Void) {
        completion(.success, createShippingMethod(), createItemPaymentSummaryItems())
    }
    
    func paymentAuthorizationViewControllerWillAuthorizePayment(_: PKPaymentAuthorizationViewController) {
    }
    
    func paymentAuthorizationViewController(_: PKPaymentAuthorizationViewController, didAuthorizePayment payment: PKPayment, completion: @escaping (PKPaymentAuthorizationStatus) -> Void) {
        print("PKPayment Token: " + payment.token.transactionIdentifier)
        print("-------------------")
        print("PKPayment Billing: \(String(describing: payment.billingContact))")
        print("-------------------")
        print("PKPayment Shipping: \(String(describing: payment.shippingContact))")
        print("-------------------")
        print("PKPayment Delivery: \(String(describing: payment.shippingMethod))")
        completion(.success)
    }
}
