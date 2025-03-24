'use strict';
import { SubscriptionProductState } from "./SubscriptionProductState";


class AbstractSubscriptionProductActive {

        /**
        * The payment methods that can be used to subscribe to this product. If none are selected, no restriction is applied.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The period after which a subscription that has been suspended due to a failed payment is terminated.
        */
    'failedPaymentSuspensionPeriod'?: string;

        /**
        * The name used to identify the product.
        */
    'name'?: string;

        /**
        * Whether subscriptions can be switched to or from this product, or whether they are locked in.
        */
    'productLocked'?: boolean;

        /**
        * When listing products, they can be sorted by this number.
        */
    'sortOrder'?: number;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionProductState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "allowedPaymentMethodConfigurations",
        "baseName": "allowedPaymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "failedPaymentSuspensionPeriod",
        "baseName": "failedPaymentSuspensionPeriod",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "productLocked",
        "baseName": "productLocked",
        "type": "boolean"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionProductState"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractSubscriptionProductActive.attributeTypeMap;
    }
}

export { AbstractSubscriptionProductActive }
