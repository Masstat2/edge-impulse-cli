/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TunerTrialBlocks } from './tunerTrialBlocks';
import { TunerTrialDspJobId } from './tunerTrialDspJobId';

export class TunerTrial {
    'id': string;
    'status': string;
    'lastCompletedEpoch'?: Date;
    'lastCompletedTraining'?: Date;
    'retries'?: number;
    'currentEpoch'?: number;
    'workerId'?: string;
    'blocks'?: Array<TunerTrialBlocks>;
    'impulse'?: object;
    'experiment'?: string;
    'originalTrialId'?: string;
    'model'?: { [key: string]: object; };
    'dspJobId'?: TunerTrialDspJobId;
    'learnJobId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "lastCompletedEpoch",
            "baseName": "lastCompletedEpoch",
            "type": "Date"
        },
        {
            "name": "lastCompletedTraining",
            "baseName": "lastCompletedTraining",
            "type": "Date"
        },
        {
            "name": "retries",
            "baseName": "retries",
            "type": "number"
        },
        {
            "name": "currentEpoch",
            "baseName": "currentEpoch",
            "type": "number"
        },
        {
            "name": "workerId",
            "baseName": "workerId",
            "type": "string"
        },
        {
            "name": "blocks",
            "baseName": "blocks",
            "type": "Array<TunerTrialBlocks>"
        },
        {
            "name": "impulse",
            "baseName": "impulse",
            "type": "object"
        },
        {
            "name": "experiment",
            "baseName": "experiment",
            "type": "string"
        },
        {
            "name": "originalTrialId",
            "baseName": "original_trial_id",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "dspJobId",
            "baseName": "dspJobId",
            "type": "TunerTrialDspJobId"
        },
        {
            "name": "learnJobId",
            "baseName": "learnJobId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TunerTrial.attributeTypeMap;
    }
}

