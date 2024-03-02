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
/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    email: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateUserRequest
     */
    DOB: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    languageId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateUserRequest
     */
    workflows?: Array<string>;
}
