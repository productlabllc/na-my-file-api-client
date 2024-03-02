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
import { WorkflowStageCriterion } from './workflow-stage-criterion';
/**
 * 
 * @export
 * @interface WorkflowStage
 */
export interface WorkflowStage {
    /**
     * 
     * @type {string}
     * @memberof WorkflowStage
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStage
     */
    stageName?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStage
     */
    workflowId?: string;
    /**
     * 
     * @type {any}
     * @memberof WorkflowStage
     */
    workflow?: any;
    /**
     * 
     * @type {Array<WorkflowStageCriterion>}
     * @memberof WorkflowStage
     */
    workflowStateCriteria?: Array<WorkflowStageCriterion>;
}