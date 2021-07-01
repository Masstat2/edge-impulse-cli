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


export class FindSyntiantPosteriorRequest {
    'targetWords': Array<string>;
    'referenceSet': FindSyntiantPosteriorRequestReferenceSetEnum;
    'wavFile'?:{ fieldname: string, originalname: string, encoding: string, mimetype: string, buffer: Buffer, size: number }[];
    'metaCsvFile'?:{ fieldname: string, originalname: string, encoding: string, mimetype: string, buffer: Buffer, size: number }[];

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "targetWords",
            "baseName": "targetWords",
            "type": "Array<string>"
        },
        {
            "name": "referenceSet",
            "baseName": "referenceSet",
            "type": "FindSyntiantPosteriorRequestReferenceSetEnum"
        },
        {
            "name": "wavFile",
            "baseName": "wavFile",
            "type": "RequestFile"
        },
        {
            "name": "metaCsvFile",
            "baseName": "metaCsvFile",
            "type": "RequestFile"
        }    ];

    static getAttributeTypeMap() {
        return FindSyntiantPosteriorRequest.attributeTypeMap;
    }
}


export type FindSyntiantPosteriorRequestReferenceSetEnum = '600_seconds' | 'full' | 'custom' | 'no_calibration';
export const FindSyntiantPosteriorRequestReferenceSetEnumValues: string[] = ['600_seconds', 'full', 'custom', 'no_calibration'];
