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
/**
 * 
 * @export
 * @interface AnalyticsQueryExecutionRequest
 */
export interface AnalyticsQueryExecutionRequest {
    /**
     * Optional. ID of the active SFTP configuration to use (associated with the target account). This is only required if the result file is scheduled for delivery to a remote SFTP server.
     * @type {number}
     * @memberof AnalyticsQueryExecutionRequest
     */
    sftpDispatchSettingsId?: number;
    /**
     * Optional. Renaming pattern used for the result file during SFTP delivery. You can use a combination of fixed Latin text and timestamp variables (e.g., "transaction_report_{YYYMMDD_hhmmss}"). Supported variable formats: DDMMYY, MMDDYY, YYYYMMDD, DD_MM_YY, DD-MM-YY, YYYY-MM-DD, YYYY_MM_DD, YYYYMMDD_hhmmss, YYYY-MM-DD_hh-mm-ss.
     * @type {string}
     * @memberof AnalyticsQueryExecutionRequest
     */
    sftpDispatchResultFileRenamePattern?: string;
    /**
     * The SQL query (in PrestoDB dialect) to execute on the analytics database. This query defines exactly which data should be retrieved.
     * @type {string}
     * @memberof AnalyticsQueryExecutionRequest
     */
    sql?: string;
}

/**
 * Check if a given object implements the AnalyticsQueryExecutionRequest interface.
 */
export function instanceOfAnalyticsQueryExecutionRequest(value: object): value is AnalyticsQueryExecutionRequest {
    return true;
}

export function AnalyticsQueryExecutionRequestFromJSON(json: any): AnalyticsQueryExecutionRequest {
    return AnalyticsQueryExecutionRequestFromJSONTyped(json, false);
}

export function AnalyticsQueryExecutionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsQueryExecutionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'sftpDispatchSettingsId': json['sftpDispatchSettingsId'] == null ? undefined : json['sftpDispatchSettingsId'],
        'sftpDispatchResultFileRenamePattern': json['sftpDispatchResultFileRenamePattern'] == null ? undefined : json['sftpDispatchResultFileRenamePattern'],
        'sql': json['sql'] == null ? undefined : json['sql'],
    };
}

export function AnalyticsQueryExecutionRequestToJSON(value?: AnalyticsQueryExecutionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sftpDispatchSettingsId': value['sftpDispatchSettingsId'],
        'sftpDispatchResultFileRenamePattern': value['sftpDispatchResultFileRenamePattern'],
        'sql': value['sql'],
    };
}

