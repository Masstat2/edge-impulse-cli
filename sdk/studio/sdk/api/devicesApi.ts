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

// tslint:disable-next-line: variable-name, no-var-requires
const PATH = require('path');
// tslint:disable-next-line: no-unsafe-any
module.paths.push(PATH.join(process.cwd(), 'node_modules'));

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CreateDeviceRequest } from '../model/createDeviceRequest';
import { GenericApiResponse } from '../model/genericApiResponse';
import { GetDeviceResponse } from '../model/getDeviceResponse';
import { ListDevicesResponse } from '../model/listDevicesResponse';
import { RenameDeviceRequest } from '../model/renameDeviceRequest';
import { StartSamplingRequest } from '../model/startSamplingRequest';
import { StartSamplingResponse } from '../model/startSamplingResponse';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { HttpBasicAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://studio.edgeimpulse.com/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DevicesApiApiKeys {
    ApiKeyAuthentication,
    JWTAuthentication,
    JWTHttpHeaderAuthentication,
}

export class DevicesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'ApiKeyAuthentication': new ApiKeyAuth('header', 'x-api-key'),
        'JWTAuthentication': new ApiKeyAuth('cookie', 'jwt'),
        'JWTHttpHeaderAuthentication': new ApiKeyAuth('header', 'x-jwt-token'),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DevicesApiApiKeys, value: string | undefined) {
        (this.authentications as any)[DevicesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Create a new device. If you set `ifNotExists` to `false` and the device already exists, the `deviceType` will be overwritten.
     * @summary Create device
     * @param projectId Project ID
     * @param createDeviceRequest 
     */
    public async createDevice (projectId: number, createDeviceRequest: CreateDeviceRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GenericApiResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/devices/create'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling createDevice.');
        }

        // verify required parameter 'createDeviceRequest' is not null or undefined
        if (createDeviceRequest === null || createDeviceRequest === undefined) {
            throw new Error('Required parameter createDeviceRequest was null or undefined when calling createDevice.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
            body: ObjectSerializer.serialize(createDeviceRequest, "CreateDeviceRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GenericApiResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GenericApiResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete a device. When this device sends a new message to ingestion or connects to remote management the device will be recreated.
     * @summary Delete device
     * @param projectId Project ID
     * @param deviceId Device ID
     */
    public async deleteDevice (projectId: number, deviceId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GenericApiResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/device/{deviceId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling deleteDevice.');
        }

        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deleteDevice.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GenericApiResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GenericApiResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieves a single device
     * @summary Get device
     * @param projectId Project ID
     * @param deviceId Device ID
     */
    public async getDevice (projectId: number, deviceId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GetDeviceResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/device/{deviceId}'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getDevice.');
        }

        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling getDevice.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GetDeviceResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetDeviceResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * List all devices for this project. Devices get included here if they connect to the remote management API or if they have sent data to the ingestion API and had the `device_id` field set.
     * @summary Lists devices
     * @param projectId Project ID
     */
    public async listDevices (projectId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<ListDevicesResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/devices'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling listDevices.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<ListDevicesResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ListDevicesResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Set the current name for a device.
     * @summary Rename
     * @param projectId Project ID
     * @param deviceId Device ID
     * @param renameDeviceRequest 
     */
    public async renameDevice (projectId: number, deviceId: string, renameDeviceRequest: RenameDeviceRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<GenericApiResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/devices/{deviceId}/rename'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling renameDevice.');
        }

        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling renameDevice.');
        }

        // verify required parameter 'renameDeviceRequest' is not null or undefined
        if (renameDeviceRequest === null || renameDeviceRequest === undefined) {
            throw new Error('Required parameter renameDeviceRequest was null or undefined when calling renameDevice.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
            body: ObjectSerializer.serialize(renameDeviceRequest, "RenameDeviceRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<GenericApiResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GenericApiResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
    /**
     * Start sampling on a device. This function returns immediately. Updates are streamed through the websocket API.
     * @summary Start sampling
     * @param projectId Project ID
     * @param deviceId Device ID
     * @param startSamplingRequest 
     */
    public async startSampling (projectId: number, deviceId: string, startSamplingRequest: StartSamplingRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<StartSamplingResponse> {
        const localVarPath = this.basePath + '/api/{projectId}/device/{deviceId}/start-sampling'
            .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'deviceId' + '}', encodeURIComponent(String(deviceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling startSampling.');
        }

        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling startSampling.');
        }

        // verify required parameter 'startSamplingRequest' is not null or undefined
        if (startSamplingRequest === null || startSamplingRequest === undefined) {
            throw new Error('Required parameter startSamplingRequest was null or undefined when calling startSampling.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            agentOptions: (process.env.EI_HOST && process.env.EI_HOST !== "edgeimpulse.com") ? {keepAlive: true} : undefined,
            json: true,
            body: ObjectSerializer.serialize(startSamplingRequest, "StartSamplingRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.JWTHttpHeaderAuthentication.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<StartSamplingResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "StartSamplingResponse");

                        const errString = `Failed to call "${localVarPath}", returned ${response.statusCode}: ` + response.body;

                        if (typeof body.success === 'boolean' && !body.success) {
                            reject(new Error(body.error || errString));
                        }
                        else if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject(errString);
                        }
                    }
                });
            });
        });
    }
}