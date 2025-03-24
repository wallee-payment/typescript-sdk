'use strict';
import { SubscriptionProductState } from "./SubscriptionProductState";


class SubscriptionProduct {

        /**
        * The payment methods that can be used to subscribe to this product. If none are selected, no restriction is applied.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The period after which a subscription that has been suspended due to a failed payment is terminated.
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
        * The name used to identify the product.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * Whether subscriptions can be switched to or from this product, or whether they are locked in.
        */
    'productLocked'?: boolean;

        /**
        * The merchant's reference used to identify the product, e.g. the SKU.
        */
    'reference'?: string;

        /**
        * When listing products, they can be sorted by this number.
        */
    'sortOrder'?: number;

        /**
        * The ID of the space this object belongs to.
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
