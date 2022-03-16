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


export class OrganizationPipelineStep {
    'name': string;
    'filter'?: string;
    'uploadType'?: OrganizationPipelineStepUploadTypeEnum;
    'projectId'?: number;
    'newProjectName'?: string;
    'projectApiKey'?: string;
    'projectHmacKey'?: string;
    'transformationBlockId'?: number;
    'category'?: OrganizationPipelineStepCategoryEnum;
    'outputDatasetName'?: string;
    'label'?: string;
    'transformationParallel'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "uploadType",
            "baseName": "uploadType",
            "type": "OrganizationPipelineStepUploadTypeEnum"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "newProjectName",
            "baseName": "newProjectName",
            "type": "string"
        },
        {
            "name": "projectApiKey",
            "baseName": "projectApiKey",
            "type": "string"
        },
        {
            "name": "projectHmacKey",
            "baseName": "projectHmacKey",
            "type": "string"
        },
        {
            "name": "transformationBlockId",
            "baseName": "transformationBlockId",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "OrganizationPipelineStepCategoryEnum"
        },
        {
            "name": "outputDatasetName",
            "baseName": "outputDatasetName",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "transformationParallel",
            "baseName": "transformationParallel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationPipelineStep.attributeTypeMap;
    }
}


export type OrganizationPipelineStepUploadTypeEnum = 'project' | 'dataset';
export const OrganizationPipelineStepUploadTypeEnumValues: string[] = ['project', 'dataset'];

export type OrganizationPipelineStepCategoryEnum = 'training' | 'testing' | 'split';
export const OrganizationPipelineStepCategoryEnumValues: string[] = ['training', 'testing', 'split'];