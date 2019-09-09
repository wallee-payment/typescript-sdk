'use strict';
import { EntityQueryFilter } from "./EntityQueryFilter";
import { EntityQueryOrderBy } from "./EntityQueryOrderBy";


class EntityQuery {

        /**
        * The filter node defines the root filter node of the query. The root node may contain multiple sub nodes with different filters in it.
        */
    'filter'?: EntityQueryFilter;

        /**
        * The language is applied to the ordering of the entities returned. Some entity fields are language dependent and hence the language is required to order them.
        */
    'language'?: string;

        /**
        * The number of entities defines how many entities should be returned. There is a maximum of 100 entities.
        */
    'numberOfEntities'?: number;

        /**
        * The order bys allows to define the ordering of the entities returned by the search.
        */
    'orderBys'?: Array<EntityQueryOrderBy>;

        /**
        * The 'starting entity' defines the entity number at which the returned result should start. The entity number is the consecutive number of the entity as returned and it is not the entity id.
        */
    'startingEntity'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "filter",
        "baseName": "filter",
        "type": "EntityQueryFilter"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "numberOfEntities",
        "baseName": "numberOfEntities",
        "type": "number"
        },
        
        {
        "name": "orderBys",
        "baseName": "orderBys",
        "type": "Array<EntityQueryOrderBy>"
        },
        
        {
        "name": "startingEntity",
        "baseName": "startingEntity",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return EntityQuery.attributeTypeMap;
    }
}

export { EntityQuery }
