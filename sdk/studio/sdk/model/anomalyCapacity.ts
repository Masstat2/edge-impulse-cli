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


/**
* Capacity level for visual anomaly detection. Determines which set of default configurations to use. The higher capacity, the higher number of (Gaussian) components, and the more adapted the model becomes to the original distribution
*/

export type AnomalyCapacity = 'low' | 'medium' | 'high';
export const AnomalyCapacityValues: string[] = ['low', 'medium', 'high'];