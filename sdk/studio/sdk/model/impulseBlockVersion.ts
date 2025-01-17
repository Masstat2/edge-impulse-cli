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


export class ImpulseBlockVersion {
    /**
    * Identifier for the new block version. Make sure to up this number when creating a new block, and don\'t re-use identifiers.
    */
    'id'?: number;
    /**
    * Whether this block is the primary version of its base block.
    */
    'primaryVersion'?: boolean;
    /**
    * Block name, will be used in menus. If a block has a baseBlockId, this field is ignored and the base block\'s name is used instead.
    */
    'name'?: string;
    /**
    * DSP dependencies, identified by DSP block ID
    */
    'dsp'?: Array<number>;
    /**
    * A short description of the block version, displayed in the block versioning UI
    */
<<<<<<< HEAD:sdk/studio/sdk/model/impulseBlockVersion.ts
    'axes'?: Array<string>;
    /**
    * (DSP only) The ID of the Input block a DSP block is connected to
    */
    'input'?: number;
    /**
    * (Input only) Size of the sliding window in milliseconds
    */
    'windowSizeMs'?: number;
    /**
    * (Input only) We use a sliding window to go over the raw data. How many milliseconds to increase the sliding window with for each step.
    */
    'windowIncreaseMs'?: number;
    /**
    * (Input only) Frequency of the input data in Hz
    */
    'frequencyHz'?: number;
    /**
    * (Input only) We use a sliding window to go over the raw data. How many milliseconds to increase the sliding window with for each step in classification mode.
    */
    'classificationWindowIncreaseMs'?: number;
    /**
    * (Input only) Whether to zero pad data when there is not enough data.
    */
    'padZeros'?: boolean;
    /**
    * (Input only) Width all images are resized to before training
    */
    'imageWidth'?: number;
    /**
    * (Input only) Width all images are resized to before training
    */
    'imageHeight'?: number;
    /**
    * (Input only) How to resize images before training
    */
    'resizeMode'?: ImpulseBlockVersionResizeModeEnum;
    /**
    * (Input only) Resize method to use when resizing images
    */
    'resizeMethod'?: ImpulseBlockVersionResizeMethodEnum;
    /**
    * (Input only) If images are resized using a crop, choose where to anchor the crop
    */
    'cropAnchor'?: ImpulseBlockVersionCropAnchorEnum;
=======
    'description'?: string;
>>>>>>> parent of 840c0ea (Release v1.13.10):sdk/studio/model/impulseBlockVersion.ts

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "primaryVersion",
            "baseName": "primaryVersion",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "dsp",
            "baseName": "dsp",
            "type": "Array<number>"
        },
        {
<<<<<<< HEAD:sdk/studio/sdk/model/impulseBlockVersion.ts
            "name": "axes",
            "baseName": "axes",
            "type": "Array<string>"
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "number"
        },
        {
            "name": "windowSizeMs",
            "baseName": "windowSizeMs",
            "type": "number"
        },
        {
            "name": "windowIncreaseMs",
            "baseName": "windowIncreaseMs",
            "type": "number"
        },
        {
            "name": "frequencyHz",
            "baseName": "frequencyHz",
            "type": "number"
        },
        {
            "name": "classificationWindowIncreaseMs",
            "baseName": "classificationWindowIncreaseMs",
            "type": "number"
        },
        {
            "name": "padZeros",
            "baseName": "padZeros",
            "type": "boolean"
        },
        {
            "name": "imageWidth",
            "baseName": "imageWidth",
            "type": "number"
        },
        {
            "name": "imageHeight",
            "baseName": "imageHeight",
            "type": "number"
        },
        {
            "name": "resizeMode",
            "baseName": "resizeMode",
            "type": "ImpulseBlockVersionResizeModeEnum"
        },
        {
            "name": "resizeMethod",
            "baseName": "resizeMethod",
            "type": "ImpulseBlockVersionResizeMethodEnum"
        },
        {
            "name": "cropAnchor",
            "baseName": "cropAnchor",
            "type": "ImpulseBlockVersionCropAnchorEnum"
=======
            "name": "description",
            "baseName": "description",
            "type": "string"
>>>>>>> parent of 840c0ea (Release v1.13.10):sdk/studio/model/impulseBlockVersion.ts
        }    ];

    static getAttributeTypeMap() {
        return ImpulseBlockVersion.attributeTypeMap;
    }
}

