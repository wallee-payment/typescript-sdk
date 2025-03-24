'use strict';


class MetricUsage {

        /**
        * The number of consumed units.
        */
    'consumedUnits'?: number;

        /**
        * The description of the consumed unit's metric.
        */
    'metricDescription'?: { [key: string]: string; };

        /**
        * The ID of the consumed units' metric.
        */
    'metricId'?: number;

        /**
        * The name of the consumed units' metric.
        */
    'metricName'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "consumedUnits",
        "baseName": "consumedUnits",
        "type": "number"
        },
        
        {
        "name": "metricDescription",
        "baseName": "metricDescription",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "metricId",
        "baseName": "metricId",
        "type": "number"
        },
        
        {
        "name": "metricName",
        "baseName": "metricName",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return MetricUsage.attributeTypeMap;
    }
}

export { MetricUsage }
