'use strict';
import { SubscriptionProductState } from "./SubscriptionProductState";


class AbstractSubscriptionProductActive {

        /**
        * The allowed payment method configurations control which payment methods can be used with this product. When none is selected all methods will be allowed.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * When a payment fails, the subscription to which the payment belongs to will be suspended. When the suspension is not removed within the specified period the subscription will be terminated. A payment is considered as failed when the subscriber issues a refund or when a subscription charge fails.
        */
    'failedPaymentSuspensionPeriod'?: string;

        /**
        * The product name is used internally to identify the configuration in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * Marks the product as locked. Meaning that customer can not change away from this product or change to this product later on.
        */
    'productLocked'?: boolean;

        /**
        * The sort order controls in which order the product is listed. The sort order is used to order the products in ascending order.
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
