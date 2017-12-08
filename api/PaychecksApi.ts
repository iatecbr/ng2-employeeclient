/**
 * Employee Portal API
 * IATec Employee Portal API
 *
 * OpenAPI spec version: 1.0.0-preview-13
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
export class PaychecksApi {

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
     * Get the 13th paycheck for a specific period
     * @summary Get 13th paycheck
     * @param period 
     * @param includeInternalAccount 
     */
    public get13thPaycheck(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<models.Paycheck> {
        return this.get13thPaycheckWithHttpInfo(period, includeInternalAccount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get the standard paycheck for a specific period
     * @summary Get standard paycheck
     * @param period 
     * @param includeInternalAccount 
     */
    public getPaycheck(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<models.Paycheck> {
        return this.getPaycheckWithHttpInfo(period, includeInternalAccount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get list of available 13th paychecks
     * @summary List 13th paychecks
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public list13thPaychecks(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.PaycheckListingItem>> {
        return this.list13thPaychecksWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get list of available standard paychecks
     * @summary List standard paychecks
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public listStandardPaychecks(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Array<models.PaycheckListingItem>> {
        return this.listStandardPaychecksWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get 13th paycheck
     * Get the 13th paycheck for a specific period
     * @param period 
     * @param includeInternalAccount 
     */
    public get13thPaycheckWithHttpInfo(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/paychecks/13th/${period}'
                    .replace('${' + 'period' + '}', String(period));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling get13thPaycheck.');
        }
        if (includeInternalAccount !== undefined) {
            queryParameters.set('includeInternalAccount', <any>includeInternalAccount);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (bearer_token) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

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
     * Get standard paycheck
     * Get the standard paycheck for a specific period
     * @param period 
     * @param includeInternalAccount 
     */
    public getPaycheckWithHttpInfo(period: number, includeInternalAccount?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/paychecks/standard/${period}'
                    .replace('${' + 'period' + '}', String(period));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling getPaycheck.');
        }
        if (includeInternalAccount !== undefined) {
            queryParameters.set('includeInternalAccount', <any>includeInternalAccount);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (bearer_token) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

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
     * List 13th paychecks
     * Get list of available 13th paychecks
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public list13thPaychecksWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/paychecks/13th';

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

        // authentication (bearer_token) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

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
     * List standard paychecks
     * Get list of available standard paychecks
     * @param count The maximum number of items the search will bring.
     * @param maxperiod Limit the search to the specified period of after. The period format is YYYYMM
     */
    public listStandardPaychecksWithHttpInfo(count?: number, maxperiod?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/paychecks/standard';

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

        // authentication (bearer_token) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

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
