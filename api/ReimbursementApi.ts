/**
 * Employee Portal API
 * IATec Employee Portal API
 *
 * OpenAPI spec version: 1.0.0-preview-7
 * Contact: andre.guilherme@iatec.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReimbursementApi {

    protected basePath = 'https://ws-rh-online-dev.sdasystems.org';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Get a specific reimbursement monthly declaration
     * @summary Get monthly declaration
     * @param period 
     */
    public getMonthlyDeclaration(period: number, extraHttpRequestParams?: any): Observable<models.MonthlyDeclaration> {
        return this.getMonthlyDeclarationWithHttpInfo(period, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get list of available monthly declarations
     * @summary List monthly declarations
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public listMonthlyDeclarations(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.MonthlyDeclarationListingItem>> {
        return this.listMonthlyDeclarationsWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get monthly declaration
     * Get a specific reimbursement monthly declaration
     * @param period 
     */
    public getMonthlyDeclarationWithHttpInfo(period: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reimbursement/monthly-declarations/${period}'
                    .replace('${' + 'period' + '}', String(period));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling getMonthlyDeclaration.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * List monthly declarations
     * Get list of available monthly declarations
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public listMonthlyDeclarationsWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reimbursement/monthly-declarations';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (maxperiod !== undefined) {
            queryParameters.set('maxperiod', <any>maxperiod);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
