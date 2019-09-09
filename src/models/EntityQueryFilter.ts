'use strict';
import { CriteriaOperator } from "./CriteriaOperator";
import { EntityQueryFilterType } from "./EntityQueryFilterType";


class EntityQueryFilter {

        /**
        * The 'children' can contain other filter nodes which are applied to the query. This property is only applicable on filter types 'OR' and 'AND'.
        */
    'children'?: Array<EntityQueryFilter>;

        /**
        * The 'fieldName' indicates the property on the entity which should be filtered. This property is only applicable on filter type 'LEAF'.
        */
    'fieldName'?: string;

        /**
        * The 'operator' indicates what kind of filtering on the 'fieldName' is executed on. This property is only applicable on filter type 'LEAF'.
        */
    'operator'?: CriteriaOperator;

        /**
        * The filter type controls how the query node is interpreted. I.e. if the node acts as leaf node or as a filter group.
        */
    'type': EntityQueryFilterType;

        /**
        * The 'value' is used to compare with the 'fieldName' as defined by the 'operator'. This property is only applicable on filter type 'LEAF'.
        */
    'value'?: any;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "children",
        "baseName": "children",
        "type": "Array<EntityQueryFilter>"
        },
        
        {
        "name": "fieldName",
        "baseName": "fieldName",
        "type": "string"
        },
        
        {
        "name": "operator",
        "baseName": "operator",
        "type": "CriteriaOperator"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "EntityQueryFilterType"
        },
        
        {
        "name": "value",
        "baseName": "value",
        "type": "any"
        }        
    ];

    static getAttributeTypeMap() {
        return EntityQueryFilter.attributeTypeMap;
    }
}

export { EntityQueryFilter }
