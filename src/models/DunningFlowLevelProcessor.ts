/* tslint:disable */
/* eslint-disable */
/**
 * Wallee AG TypeScript SDK
 *
 * This library allows to interact with the Wallee AG payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://en.wallee.com
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { mapValues } from '../runtime';
import type { Feature } from './Feature';
import {
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
    FeatureToJSONTyped,
} from './Feature';

/**
 * 
 * @export
 * @interface DunningFlowLevelProcessor
 */
export interface DunningFlowLevelProcessor {
    /**
     * 
     * @type {Feature}
     * @memberof DunningFlowLevelProcessor
     */
    feature?: Feature;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DunningFlowLevelProcessor
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DunningFlowLevelProcessor
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningFlowLevelProcessor
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the DunningFlowLevelProcessor interface.
 */
export function instanceOfDunningFlowLevelProcessor(value: object): value is DunningFlowLevelProcessor {
    return true;
}

export function DunningFlowLevelProcessorFromJSON(json: any): DunningFlowLevelProcessor {
    return DunningFlowLevelProcessorFromJSONTyped(json, false);
}

export function DunningFlowLevelProcessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningFlowLevelProcessor {
    if (json == null) {
        return json;
    }
    return {
        
        'feature': json['feature'] == null ? undefined : FeatureFromJSON(json['feature']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function DunningFlowLevelProcessorToJSON(json: any): DunningFlowLevelProcessor {
    return DunningFlowLevelProcessorToJSONTyped(json, false);
}

export function DunningFlowLevelProcessorToJSONTyped(value?: Omit<DunningFlowLevelProcessor, 'name'|'description'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'feature': FeatureToJSON(value['feature']),
    };
}

