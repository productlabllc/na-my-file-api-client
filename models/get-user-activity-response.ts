/* tslint:disable */
/* eslint-disable */
/**
 * My File NYC
 * This api represents a combination of all API Gateway Lambda Proxy components for My File NYC.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: wereid@nycopportunity.nyc.gov
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PlatformActivityLogs } from './platform-activity-logs';
/**
 * 
 * @export
 * @interface GetUserActivityResponse
 */
export interface GetUserActivityResponse {
    /**
     * 
     * @type {Array<PlatformActivityLogs>}
     * @memberof GetUserActivityResponse
     */
    items?: Array<PlatformActivityLogs>;
    /**
     * 
     * @type {number}
     * @memberof GetUserActivityResponse
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUserActivityResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUserActivityResponse
     */
    limit?: number;
}