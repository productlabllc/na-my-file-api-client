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
 * @interface CreateFamilyMemberRequest
 */
export interface CreateFamilyMemberRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateFamilyMemberRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFamilyMemberRequest
     */
    lastName: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateFamilyMemberRequest
     */
    DOB: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateFamilyMemberRequest
     */
    relationship: string;
}
