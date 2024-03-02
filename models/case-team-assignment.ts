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
import { User } from './user';
/**
 * 
 * @export
 * @interface CaseTeamAssignment
 */
export interface CaseTeamAssignment {
    /**
     * 
     * @type {string}
     * @memberof CaseTeamAssignment
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CaseTeamAssignment
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseTeamAssignment
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseTeamAssignment
     */
    caseRole?: string;
    /**
     * 
     * @type {any}
     * @memberof CaseTeamAssignment
     */
    _case?: any;
    /**
     * 
     * @type {User}
     * @memberof CaseTeamAssignment
     */
    user?: User;
}