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

import { DeploymentTargetEngine } from './deploymentTargetEngine';
import { KerasModelTypeEnum } from './kerasModelTypeEnum';

export class BuildOnDeviceModelRequest {
    'engine': DeploymentTargetEngine;
    'modelType'?: KerasModelTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "engine",
            "baseName": "engine",
            "type": "DeploymentTargetEngine"
        },
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "KerasModelTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BuildOnDeviceModelRequest.attributeTypeMap;
    }
}

<<<<<<< HEAD:sdk/studio/sdk/model/buildOnDeviceModelRequest.ts
=======

export type BuildOnDeviceModelRequestEngineEnum = 'tflite' | 'tflite-eon';
export const BuildOnDeviceModelRequestEngineEnumValues: string[] = ['tflite', 'tflite-eon'];
>>>>>>> parent of 840c0ea (Release v1.13.10):sdk/studio/model/buildOnDeviceModelRequest.ts
