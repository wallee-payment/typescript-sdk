'use strict';


class AnalyticsQuery {

        /**
        * The mandatory ID of an account in which the query shall be executed. Must be a valid account ID greater than 0.
        */
    'accountId': number;

        /**
        * A client generated nonce which uniquely identifies the query to be executed. Subsequent submissions with the same external ID will not re-execute the query but instead return the existing execution with that ID. Either the External ID or a Maximal Cache Age greater than 0 must be specified. If both are specified the External ID will have precedence and the Maximal Cache Age will be ignored.
        */
    'externalId'?: string;

        /**
        * The maximal age in minutes of cached query executions to return. If an equivalent query execution with the same Query String, Account ID and Spaces parameters not older than the specified age is already available that execution will be returned instead of a newly started execution. Set to 0 or null (and set a unique, previously unused External ID) to force a new query execution irrespective of previous executions. Either the External ID or a Cache Duration greater than 0 must be specified. If both are specified, the External ID will be preferred (and the Maximal Cache Age ignored).
        */
    'maxCacheAge'?: number;

        /**
        * The SQL statement which is being submitted for execution. Must be a valid PrestoDB/Athena SQL statement.
        */
    'queryString'?: string;

        /**
        * The maximal amount of scanned data that this query is allowed to scan. After this limit is reached query will be canceled by the system. 
        */
    'scannedDataLimit'?: number;

        /**
        * The IDs of the spaces in which the query shall be executed. At most 5 space IDs may be specified. All specified spaces must be owned by the account specified by the accountId property. The spaces property may be missing or empty to query all spaces of the specified account.
        */
    'spaceIds'?: Array<number>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "accountId",
        "baseName": "accountId",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "maxCacheAge",
        "baseName": "maxCacheAge",
        "type": "number"
        },
        
        {
        "name": "queryString",
        "baseName": "queryString",
        "type": "string"
        },
        
        {
        "name": "scannedDataLimit",
        "baseName": "scannedDataLimit",
        "type": "number"
        },
        
        {
        "name": "spaceIds",
        "baseName": "spaceIds",
        "type": "Array<number>"
        }        
    ];

    static getAttributeTypeMap() {
        return AnalyticsQuery.attributeTypeMap;
    }
}

export { AnalyticsQuery }
