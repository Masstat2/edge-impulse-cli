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

import { CreateBlockVersionResponseAllOf } from './createBlockVersionResponseAllOf';
import { GenericApiResponse } from './genericApiResponse';

export class CreateBlockVersionResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    /**
    * ID of the new block
    */
    'id': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateBlockVersionResponse.attributeTypeMap;
    }
}
