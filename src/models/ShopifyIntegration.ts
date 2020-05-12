'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";
import { ShopifyIntegrationAppVersion } from "./ShopifyIntegrationAppVersion";


class ShopifyIntegration {

        /**
        * 
        */
    'allowInvoiceDownload'?: boolean;

        /**
        * 
        */
    'allowedPaymentMethodConfigurations'?: Array<PaymentMethodConfiguration>;

        /**
        * 
        */
    'appVersion'?: ShopifyIntegrationAppVersion;

        /**
        * 
        */
    'currency'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'installed'?: boolean;

        /**
        * Enabling the integrated payment form will embed the payment form in the Shopify shop. The app needs to be installed for this to be possible.
        */
    'integratedPaymentFormEnabled'?: boolean;

        /**
        * The checkout language forces a specific language in the checkout. Without a checkout language the browser setting of the buyer is used to determine the language.
        */
    'language'?: string;

        /**
        * The login name is used to link a specific Shopify payment gateway to this integration.This login name is to be filled into the appropriate field in the shops payment gateway configuration.
        */
    'loginName'?: string;

        /**
        * The integration name is used internally to identify a specific integration.For example the name is used withinsearch fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Define the path of the proxy URL. This only needs to be changed if the apps proxy URL is overwritten in the Shopify store.
        */
    'proxyPath'?: string;

        /**
        * 
        */
    'replacePaymentMethodImage'?: boolean;

        /**
        * The store address is used to link a specific Shopify shop to this integration. This is the name used in the Shopifys admin URL: [storeAddress].myshopify.com
        */
    'shopName'?: string;

        /**
        * 
        */
    'showPaymentInformation'?: boolean;

        /**
        * 
        */
    'showSubscriptionInformation'?: boolean;

        /**
        * 
        */
    'spaceId'?: number;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "allowInvoiceDownload",
        "baseName": "allowInvoiceDownload",
        "type": "boolean"
        },
        
        {
        "name": "allowedPaymentMethodConfigurations",
        "baseName": "allowedPaymentMethodConfigurations",
        "type": "Array<PaymentMethodConfiguration>"
        },
        
        {
        "name": "appVersion",
        "baseName": "appVersion",
        "type": "ShopifyIntegrationAppVersion"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "installed",
        "baseName": "installed",
        "type": "boolean"
        },
        
        {
        "name": "integratedPaymentFormEnabled",
        "baseName": "integratedPaymentFormEnabled",
        "type": "boolean"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "loginName",
        "baseName": "loginName",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "proxyPath",
        "baseName": "proxyPath",
        "type": "string"
        },
        
        {
        "name": "replacePaymentMethodImage",
        "baseName": "replacePaymentMethodImage",
        "type": "boolean"
        },
        
        {
        "name": "shopName",
        "baseName": "shopName",
        "type": "string"
        },
        
        {
        "name": "showPaymentInformation",
        "baseName": "showPaymentInformation",
        "type": "boolean"
        },
        
        {
        "name": "showSubscriptionInformation",
        "baseName": "showSubscriptionInformation",
        "type": "boolean"
        },
        
        {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifyIntegration.attributeTypeMap;
    }
}

export { ShopifyIntegration }
