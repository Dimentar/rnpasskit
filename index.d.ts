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
export type PKMerchantCapability = 'capability3DS' | 'capabilityEMV' | 'capabilityCredit' | 'capabilityDebit'
export type PKShippingType = 'shipping' | 'delivery' | 'storePickup' | 'servicePickup'
export type PKPaymentSummaryItemType = 'final' | 'pending'
export type PKContactField = 'postalAddress' | 'emailAddress' | 'phoneNumber' | 'name' | 'phoneticName'
export type CurrencyCode = 'ADP' | 'AED' | 'AFA' | 'AFN' | 'ALK' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'AOK' | 'AON' | 'AOR' | 'ARA' | 'ARL' | 'ARM' | 'ARP' | 'ARS' | 'ATS' | 'AUD' | 'AWG' | 'AZM' | 'AZN' | 'BAD' | 'BAM' | 'BAN' | 'BBD' | 'BDT' | 'BEC' | 'BEF' | 'BEL' | 'BGL' | 'BGM' | 'BGN' | 'BGO' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOL' | 'BOP' | 'BOV' | 'BRB' | 'BRC' | 'BRE' | 'BRL' | 'BRN' | 'BRR' | 'BRZ' | 'BSD' | 'BTN' | 'BUK' | 'BWP' | 'BYB' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHE' | 'CHF' | 'CHW' | 'CLE' | 'CLF' | 'CLP' | 'CNX' | 'CNY' | 'COP' | 'COU' | 'CRC' | 'CSD' | 'CSK' | 'CUC' | 'CUP' | 'CVE' | 'CYP' | 'CZK' | 'DDM' | 'DEM' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'ECS' | 'ECV' | 'EEK' | 'EGP' | 'EQE' | 'ERN' | 'ESA' | 'ESB' | 'ESP' | 'ETB' | 'EUR' | 'FIM' | 'FJD' | 'FKP' | 'FRF' | 'GBP' | 'GEK' | 'GEL' | 'GHC' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GNS' | 'GQE' | 'GRD' | 'GTQ' | 'GWE' | 'GWP' | 'GYD' | 'HKD' | 'HNL' | 'HRD' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'IEP' | 'ILP' | 'ILR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISJ' | 'ISK' | 'ITL' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRH' | 'KRO' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LSM' | 'LTL' | 'LTT' | 'LUC' | 'LUF' | 'LUL' | 'LVL' | 'LVR' | 'LYD' | 'MAD' | 'MAF' | 'MCF' | 'MDC' | 'MDL' | 'MGA' | 'MGF' | 'MKD' | 'MKN' | 'MLF' | 'MMK' | 'MNT' | 'MOP' | 'MRO' | 'MTL' | 'MTP' | 'MUR' | 'MVP' | 'MVR' | 'MWK' | 'MXN' | 'MXP' | 'MXV' | 'MYR' | 'MZE' | 'MZM' | 'MZN' | 'NAD' | 'NGN' | 'NIC' | 'NIO' | 'NLG' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEI' | 'PEN' | 'PES' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PLZ' | 'PTE' | 'PYG' | 'QAR' | 'RHD' | 'ROL' | 'RON' | 'RSD' | 'RUB' | 'RUR' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDD' | 'SDG' | 'SDP' | 'SEK' | 'SGD' | 'SHP' | 'SIT' | 'SKK' | 'SLL' | 'SOS' | 'SRD' | 'SRG' | 'SSP' | 'STD' | 'SUR' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJR' | 'TJS' | 'TMM' | 'TMT' | 'TND' | 'TOP' | 'TPE' | 'TRL' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UAK' | 'UGS' | 'UGX' | 'USD' | 'USN' | 'USS' | 'UYI' | 'UYP' | 'UYU' | 'UZS' | 'VEB' | 'VEF' | 'VND' | 'VNN' | 'VUV' | 'WST' | 'XAF' | 'XAG' | 'XAU' | 'XBA' | 'XBB' | 'XBC' | 'XBD' | 'XCD' | 'XDR' | 'XEU' | 'XFO' | 'XFU' | 'XOF' | 'XPD' | 'XPF' | 'XPT' | 'XRE' | 'XSU' | 'XTS' | 'XUA' | 'XXX' | 'YDD' | 'YER' | 'YUD' | 'YUM' | 'YUN' | 'YUR' | 'ZAL' | 'ZAR' | 'ZMK' | 'ZMW' | 'ZRN' | 'ZRZ' | 'ZWL' | 'ZWR' | 'ZWD'

export interface PersonNameComponents {
    namePrefix?: string
    givenName?: string
    middleName?: string
    familyName?: string
    nameSuffix?: string
    nickname?: string
    phoneticRepresentation?: PersonNameComponents
}

export interface CNPostalAddress {
    street?: string
    subLocality: string
    city: string
    subAdministrativeArea: string
    state: string
    postalCode: string
    country: string
    isoCountryCode: string
}

export interface CNPhoneNumber {
    stringValue: string
}

export interface PKContact {
    name?: PersonNameComponents
    postalAddress?: CNPostalAddress
    phoneNumber?: CNPhoneNumber
    emailAddress?: string
    constructor()
}

export interface PKPaymentSummaryItem {
    label: string
    amount: number
    type: PKPaymentSummaryItemType
}

export interface PKShippingMethod extends PKPaymentSummaryItem {
    identifier?: string
    detail?: string
}

export interface PrepareRequestProps {
    supportedPaymentNetworks?: Array<PKPaymentNetwork>
    merchantIdentifier?: string
    merchantCapabilities?: PKMerchantCapability,
    currencyCode?: CurrencyCode
    countryCode?: string
    supportedCountries?: Set<string>
    paymentSummaryItems?: Array<PKPaymentSummaryItem>
    requiredBillingContactFields?: Set<PKContactField>
    requiredShippingContactFields?: Set<PKContactField>
    billingContact?: PKContact
    shippingContact?: PKContact
    shippingMethods?: Array<PKShippingMethod>
    shippingType?: PKShippingType
    applicationData?: any
}

export class RNPassKit {
    static canMakePayments: boolean;
    static canMakePaymentsUsingNetworks(supportedPaymentNetworks: Array<PKPaymentNetwork>, callback: (error: any, can: boolean) => void): Function;
    static prepareRequest(options: PrepareRequestProps, callback: (response: Array<any>) => void): Function;
    static present(): Function;
    static openPaymentSetup(): Function;
}