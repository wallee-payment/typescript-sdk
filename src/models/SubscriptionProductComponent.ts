'use strict';
import { SubscriptionProductComponentGroup } from "./SubscriptionProductComponentGroup";
import { SubscriptionProductComponentReference } from "./SubscriptionProductComponentReference";
import { TaxClass } from "./TaxClass";


class SubscriptionProductComponent {

        /**
        * If switching from a component with a lower tier to a component with a higher one, this is considered an upgrade and a fee may be applied.
        */
    'componentChangeWeight'?: number;

        /**
        * The group that the component belongs to.
        */
    'componentGroup'?: SubscriptionProductComponentGroup;

        /**
        * Whether this is the default component in its group and preselected.
        */
    'defaultComponent'?: boolean;

        /**
        * The localized description of the component that is displayed to the customer.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * A maximum of the defined quantity can be selected for this component.
        */
    'maximalQuantity'?: number;

        /**
        * A minimum of the defined quantity must be selected for this component.
        */
    'minimalQuantity'?: number;

        /**
        * The localized name of the component that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * The quantity step determines the interval in which the quantity can be increased.
        */
    'quantityStep'?: number;

        /**
        * The reference is used to link components across different product versions.
        */
    'reference'?: SubscriptionProductComponentReference;

        /**
        * When listing components, they can be sorted by this number.
        */
    'sortOrder'?: number;

        /**
        * The tax class to be applied to fees.
        */
    'taxClass'?: TaxClass;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "componentChangeWeight",
        "baseName": "componentChangeWeight",
        "type": "number"
        },
        
        {
        "name": "componentGroup",
        "baseName": "componentGroup",
        "type": "SubscriptionProductComponentGroup"
        },
        
        {
        "name": "defaultComponent",
        "baseName": "defaultComponent",
        "type": "boolean"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
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
        "name": "maximalQuantity",
        "baseName": "maximalQuantity",
        "type": "number"
        },
        
        {
        "name": "minimalQuantity",
        "baseName": "minimalQuantity",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "quantityStep",
        "baseName": "quantityStep",
        "type": "number"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "SubscriptionProductComponentReference"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "taxClass",
        "baseName": "taxClass",
        "type": "TaxClass"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductComponent.attributeTypeMap;
    }
}

export { SubscriptionProductComponent }
