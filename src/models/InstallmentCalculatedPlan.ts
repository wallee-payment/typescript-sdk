'use strict';
import { InstallmentCalculatedSlice } from "./InstallmentCalculatedSlice";
import { InstallmentPlanConfiguration } from "./InstallmentPlanConfiguration";
import { PaymentMethodConfiguration } from "./PaymentMethodConfiguration";
import { Transaction } from "./Transaction";


class InstallmentCalculatedPlan {

        /**
        * 
        */
    'configuration'?: InstallmentPlanConfiguration;

        /**
        * 
        */
    'paymentMethodConfigurations'?: Array<PaymentMethodConfiguration>;

        /**
        * 
        */
    'slices'?: Array<InstallmentCalculatedSlice>;

        /**
        * 
        */
    'totalAmount'?: number;

        /**
        * 
        */
    'transaction'?: Transaction;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "configuration",
        "baseName": "configuration",
        "type": "InstallmentPlanConfiguration"
        },
        
        {
        "name": "paymentMethodConfigurations",
        "baseName": "paymentMethodConfigurations",
        "type": "Array<PaymentMethodConfiguration>"
        },
        
        {
        "name": "slices",
        "baseName": "slices",
        "type": "Array<InstallmentCalculatedSlice>"
        },
        
        {
        "name": "totalAmount",
        "baseName": "totalAmount",
        "type": "number"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        }        
    ];

    static getAttributeTypeMap() {
        return InstallmentCalculatedPlan.attributeTypeMap;
    }
}

export { InstallmentCalculatedPlan }
