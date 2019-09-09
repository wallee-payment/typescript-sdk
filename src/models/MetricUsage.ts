'use strict';


class MetricUsage {

        /**
        * The consumed units provide the value of how much has been consumed of the particular metric.
        */
    'consumedUnits'?: number;

        /**
        * The metric description describes the metric.
        */
    'metricDescription'?: { [key: string]: string; };

        /**
        * The metric ID identifies the metric for consumed units.
        */
    'metricId'?: number;

        /**
        * The metric name defines the name of the consumed units.
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
