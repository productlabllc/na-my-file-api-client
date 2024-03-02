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
import { UserFile } from './user-file';
/**
 * 
 * @export
 * @interface CaseFile
 */
export interface CaseFile {
    /**
     * 
     * @type {string}
     * @memberof CaseFile
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CaseFile
     */
    userFileId?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseFile
     */
    createdByUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseFile
     */
    caseId?: string;
    /**
     * 
     * @type {any}
     * @memberof CaseFile
     */
    _case?: any;
    /**
     * 
     * @type {UserFile}
     * @memberof CaseFile
     */
    userFile?: UserFile;
}
