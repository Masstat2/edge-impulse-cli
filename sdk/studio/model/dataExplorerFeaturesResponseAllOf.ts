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

import { DspTrainedFeaturesResponseAllOfData } from './dspTrainedFeaturesResponseAllOfData';
import { ImpulseInputBlock } from './impulseInputBlock';

export class DataExplorerFeaturesResponseAllOf {
    'hasFeatures': boolean;
    'data': Array<DspTrainedFeaturesResponseAllOfData>;
    'inputBlock'?: ImpulseInputBlock;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasFeatures",
            "baseName": "hasFeatures",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<DspTrainedFeaturesResponseAllOfData>"
        },
        {
            "name": "inputBlock",
            "baseName": "inputBlock",
            "type": "ImpulseInputBlock"
        }    ];

    static getAttributeTypeMap() {
        return DataExplorerFeaturesResponseAllOf.attributeTypeMap;
    }
}
