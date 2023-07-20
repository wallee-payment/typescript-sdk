'use strict';
import { SubscriptionProductState } from "./SubscriptionProductState";


class SubscriptionProduct {

        /**
        * The allowed payment method configurations control which payment methods can be used with this product. When none is selected all methods will be allowed.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * When a payment fails, the subscription to which the payment belongs to will be suspended. When the suspension is not removed within the specified period the subscription will be terminated. A payment is considered as failed when the subscriber issues a refund or when a subscription charge fails.
        */
    'failedPaymentSuspensionPeriod'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The product name is used internally to identify the configuration in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Marks the product as locked. Meaning that customer can not change away from this product or change to this product later on.
        */
    'productLocked'?: boolean;

        /**
        * The product reference identifies the product for external systems. This field may contain the product's SKU.
        */
    'reference'?: string;

        /**
        * The sort order controls in which order the product is listed. The sort order is used to order the products in ascending order.
        */
    'sortOrder'?: number;

        /**
        * 
        */
    'spaceId'?: number;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionProductState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
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
        "name": "productLocked",
        "baseName": "productLocked",
        "type": "boolean"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionProductState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProduct.attributeTypeMap;
    }
}

export { SubscriptionProduct }
