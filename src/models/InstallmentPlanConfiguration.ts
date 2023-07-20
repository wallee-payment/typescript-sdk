'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { ResourcePath } from "./ResourcePath";
import { SpaceReference } from "./SpaceReference";
import { TaxClass } from "./TaxClass";


class InstallmentPlanConfiguration {

        /**
        * The base currency in which the installment fee and minimal amount are defined.
        */
    'baseCurrency'?: string;

        /**
        * If a transaction meets all selected conditions the installment plan will be available to the customer to be selected.
        */
    'conditions'?: Array<number>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The installment fee is a fixed amount that is charged additionally when applying this installment plan.
        */
    'installmentFee'?: number;

        /**
        * The interest rate is a percentage of the total amount that is charged additionally when applying this installment plan.
        */
    'interestRate'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The installment plan can only be applied if the orders total is at least the defined minimal amount.
        */
    'minimalAmount'?: number;

        /**
        * The installment plan name is used internally to identify the plan in administrative interfaces.For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * A installment plan can be enabled only for specific payment method configurations. Other payment methods will not be selectable by the buyer.
        */
    'paymentMethodConfigurations'?: Array<number>;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The sort order controls in which order the installation plans are listed. The sort order is used to order the plans in ascending order.
        */
    'sortOrder'?: number;

        /**
        * 
        */
    'spaceReference'?: SpaceReference;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The tax class determines the taxes which are applicable on all fees linked to the installment plan.
        */
    'taxClass'?: TaxClass;

        /**
        * The terms and conditions will be displayed to the customer when he or she selects this installment plan.
        */
    'termsAndConditions'?: ResourcePath;

        /**
        * The title of the installment plan is used within the payment process. The title is visible to the buyer.
        */
    'title'?: { [key: string]: string; };

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "baseCurrency",
        "baseName": "baseCurrency",
        "type": "string"
        },
        
        {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<number>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "installmentFee",
        "baseName": "installmentFee",
        "type": "number"
        },
        
        {
        "name": "interestRate",
        "baseName": "interestRate",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "minimalAmount",
        "baseName": "minimalAmount",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "paymentMethodConfigurations",
        "baseName": "paymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "spaceReference",
        "baseName": "spaceReference",
        "type": "SpaceReference"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "taxClass",
        "baseName": "taxClass",
        "type": "TaxClass"
        },
        
        {
        "name": "termsAndConditions",
        "baseName": "termsAndConditions",
        "type": "ResourcePath"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return InstallmentPlanConfiguration.attributeTypeMap;
    }
}

export { InstallmentPlanConfiguration }
