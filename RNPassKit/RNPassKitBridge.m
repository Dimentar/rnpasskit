//
//  RNPassKitBridge.m
//  ReactNativePlayground
//
//  Created by Moisei Alexandru on 13/12/2017.
//  Copyright © 2017 YNAP. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <PassKit/PassKit.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTConvert.h>

@interface RCT_EXTERN_MODULE(RNPassKit, RCTEventEmitter)

RCT_EXTERN_METHOD(openPaymentSetup)

RCT_EXTERN_METHOD(prepareRequest:(NSDictionary *)options callback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(present)

@end
