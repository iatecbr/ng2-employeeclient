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

import * as models from './models';

export interface Paycheck {
    entity?: models.Entity;

    employee?: models.Employee;

    period?: string;

    amounts?: Array<models.AmountsEntry>;

    depositInfo?: string;

    additionalInfo?: Array<string>;

    baseSalary: number;

    inssBalance: number;

    fgtsBase: number;

    currentMonthFgts: number;

    grossIrrfBase: number;

    irrfDeduction: number;

    netIrrfBase: number;

    inssClass: number;

    inssValueDescription?: string;

    inssBase: number;

    totalEarnings: number;

    totalDiscounts?: number;

    netValue: number;

    internalAccountInfo?: models.InternalAccount;

}
