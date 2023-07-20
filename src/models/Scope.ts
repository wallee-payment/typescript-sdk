'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { Feature } from "./Feature";


class Scope {

        /**
        * The domain name that belongs to the scope.
        */
    'domainName'?: string;

        /**
        * The list of features that are active in the scope.
        */
    'features'?: Array<Feature>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The name identifying the scope in e.g. URLs.
        */
    'machineName'?: string;

        /**
        * The name used to identify the scope.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The port where the scope can be accessed.
        */
    'port'?: number;

        /**
        * Whether the scope supports SSL.
        */
    'sslActive'?: boolean;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The themes that determine the look and feel of the scope's user interface. A fall-through strategy is applied when building the actual theme.
        */
    'themes'?: Array<string>;

        /**
        * The URL where the scope can be accessed.
        */
    'url'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "domainName",
        "baseName": "domainName",
        "type": "string"
        },
        
        {
        "name": "features",
        "baseName": "features",
        "type": "Array<Feature>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "machineName",
        "baseName": "machineName",
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
        "name": "port",
        "baseName": "port",
        "type": "number"
        },
        
        {
        "name": "sslActive",
        "baseName": "sslActive",
        "type": "boolean"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "themes",
        "baseName": "themes",
        "type": "Array<string>"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Scope.attributeTypeMap;
    }
}

export { Scope }
