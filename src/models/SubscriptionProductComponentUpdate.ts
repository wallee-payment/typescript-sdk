'use strict';


class SubscriptionProductComponentUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * If a product component changes from one with a lower product component tier (e.g. 1) to one with a higher product component tier (e.g. 3), it is considered an upgrade and a one-time fee could be applied.
        */
    'componentChangeWeight'?: number;

        /**
        * 
        */
    'componentGroup'?: number;

        /**
        * When a component is marked as a 'default' component it is used as the default component in its group and will be preselected in the product configuration.
        */
    'defaultComponent'?: boolean;

        /**
        * The component description may contain a longer description which gives the subscriber a better understanding of what the component contains.
        */
    'description'?: { [key: string]: string; };

        /**
        * The maximum quantity defines the maximum value which must be entered for the quantity.
        */
    'maximalQuantity'?: number;

        /**
        * The minimal quantity defines the minimum value which must be entered for the quantity.
        */
    'minimalQuantity'?: number;

        /**
        * The component name is shown to the subscriber. It should describe in few words what the component does contain.
        */
    'name'?: { [key: string]: string; };

        /**
        * The quantity step defines at which interval the quantity can be increased.
        */
    'quantityStep'?: number;

        /**
        * The component reference is used to identify the component by external systems and it marks components to represent the same component within different product versions.
        */
    'reference'?: number;

        /**
        * The sort order controls in which order the component is listed. The sort order is used to order the components in ascending order.
        */
    'sortOrder'?: number;

        /**
        * The tax class of the component determines the taxes which are applicable on all fees linked with the component.
        */
    'taxClass'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "componentChangeWeight",
        "baseName": "componentChangeWeight",
        "type": "number"
        },
        
        {
        "name": "componentGroup",
        "baseName": "componentGroup",
        "type": "number"
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
        "type": "number"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "taxClass",
        "baseName": "taxClass",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductComponentUpdate.attributeTypeMap;
    }
}

export { SubscriptionProductComponentUpdate }
