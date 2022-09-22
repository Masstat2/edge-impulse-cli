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


export class OrganizationPipelineItemCount {
    'itemCount': number;
    'itemCountChecklistOK': number;
    'itemCountChecklistFailed': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemCount",
            "baseName": "itemCount",
            "type": "number"
        },
        {
            "name": "itemCountChecklistOK",
            "baseName": "itemCountChecklistOK",
            "type": "number"
        },
        {
            "name": "itemCountChecklistFailed",
            "baseName": "itemCountChecklistFailed",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationPipelineItemCount.attributeTypeMap;
    }
}
