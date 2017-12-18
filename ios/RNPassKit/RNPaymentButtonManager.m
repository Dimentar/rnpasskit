//
//  RNPaymentButtonManager.m
//  RNPassKit
//
//  Created by Moisei Alexandru on 14/12/2017.
//

#import <PassKit/PassKit.h>
#import <React/RCTViewManager.h>
#import <RNPassKit/RNPassKit-Swift.h>

@implementation RCTConvert (PKPaymentButton)

RCT_ENUM_CONVERTER(PKPaymentButtonType, (
     @{
       @"plain": @(PKPaymentButtonTypePlain),
       @"buy": @(PKPaymentButtonTypeBuy),
       @"setUp": @(PKPaymentButtonTypeSetUp),
       //       @"inStore": @(PKPaymentButtonTypeInStore),
       //       @"donate": @(PKPaymentButtonTypeDonate),
       }), PKPaymentButtonTypeBuy, integerValue)

RCT_ENUM_CONVERTER(PKPaymentButtonStyle, (
      @{
        @"white": @(PKPaymentButtonStyleWhite),
        @"whiteOutline": @(PKPaymentButtonStyleWhiteOutline),
        @"black": @(PKPaymentButtonStyleBlack),
        }), PKPaymentButtonStyleBlack, integerValue)

@end

@interface RNPaymentButtonManager : RCTViewManager
@end

@implementation RNPaymentButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [RNPaymentButton new];
}

RCT_EXPORT_VIEW_PROPERTY(type, PKPaymentButtonType)
RCT_EXPORT_VIEW_PROPERTY(colorStyle, PKPaymentButtonStyle)
RCT_EXPORT_VIEW_PROPERTY(onTouchUpInside, RCTBubblingEventBlock)

@end
