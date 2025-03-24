'use strict';
import { BillingCycleType } from "./BillingCycleType";
import { BillingDayCustomization } from "./BillingDayCustomization";
import { DisplayableDayOfWeek } from "./DisplayableDayOfWeek";
import { DisplayableMonth } from "./DisplayableMonth";


class BillingCycleModel {

        /**
        * 
        */
    'billingCycleType': BillingCycleType;

        /**
        * 
        */
    'customization'?: BillingDayCustomization;

        /**
        * 
        */
    'dayOfMonth'?: number;

        /**
        * 
        */
    'month'?: DisplayableMonth;

        /**
        * Billing Cycle type multiplied by Number of Periods defines billing cycle duration, e.g. 3 months. Monthly types require 1-12; weekly and yearly types require 1-9 periods; and daily types require 1-30.
        */
    'numberOfPeriods': number;

        /**
        * 
        */
    'weeklyDay'?: DisplayableDayOfWeek;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingCycleType",
        "baseName": "billingCycleType",
        "type": "BillingCycleType"
        },
        
        {
        "name": "customization",
        "baseName": "customization",
        "type": "BillingDayCustomization"
        },
        
        {
        "name": "dayOfMonth",
        "baseName": "dayOfMonth",
        "type": "number"
        },
        
        {
        "name": "month",
        "baseName": "month",
        "type": "DisplayableMonth"
        },
        
        {
        "name": "numberOfPeriods",
        "baseName": "numberOfPeriods",
        "type": "number"
        },
        
        {
        "name": "weeklyDay",
        "baseName": "weeklyDay",
        "type": "DisplayableDayOfWeek"
        }        
    ];

    static getAttributeTypeMap() {
        return BillingCycleModel.attributeTypeMap;
    }
}

export { BillingCycleModel }
