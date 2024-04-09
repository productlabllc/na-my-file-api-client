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
import { CaseApplicant } from './case-applicant';
import { CaseAttributes } from './case-attributes';
import { CaseCriterion } from './case-criterion';
import { CaseFile } from './case-file';
import { CaseNote } from './case-note';
import { CaseTeamAssignment } from './case-team-assignment';
/**
 * 
 * @export
 * @interface UpdateCaseResponse
 */
export interface UpdateCaseResponse {
    /**
     * 
     * @type {string}
     * @memberof UpdateCaseResponse
     */
    Title?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCaseResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCaseResponse
     */
    CaseType?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateCaseResponse
     */
    PercentComplete?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateCaseResponse
     */
    AgencyCaseIdentifier?: string;
    /**
     * 
     * @type {CaseAttributes}
     * @memberof UpdateCaseResponse
     */
    CaseAttributes?: CaseAttributes;
    /**
     * 
     * @type {Array<CaseCriterion>}
     * @memberof UpdateCaseResponse
     */
    CaseCriteria?: Array<CaseCriterion>;
    /**
     * 
     * @type {Array<CaseNote>}
     * @memberof UpdateCaseResponse
     */
    CaseNotes?: Array<CaseNote>;
    /**
     * 
     * @type {Array<CaseTeamAssignment>}
     * @memberof UpdateCaseResponse
     */
    CaseTeamAssignments?: Array<CaseTeamAssignment>;
    /**
     * 
     * @type {Array<CaseFile>}
     * @memberof UpdateCaseResponse
     */
    CaseFiles?: Array<CaseFile>;
    /**
     * 
     * @type {Array<CaseApplicant>}
     * @memberof UpdateCaseResponse
     */
    CaseApplicants?: Array<CaseApplicant>;
}
