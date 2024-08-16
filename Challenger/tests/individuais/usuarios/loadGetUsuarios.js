import { sleep } from 'k6';
import { BaseRest , BaseChecks, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.loadThresholds; 

const base_uri = testConfig.environment.hml.url
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();


export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}


export default function() {
    const allUsers = baseRest.get( ENDPOINTS.USER_ENDPOINT);
    
    baseChecks.checkStatusCode(allUsers, 200);
    baseChecks.checkResponseTime(allUsers, 6500);
    sleep(1)
}







