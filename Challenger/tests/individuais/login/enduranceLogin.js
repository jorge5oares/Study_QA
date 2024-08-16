import { sleep } from 'k6';
import { BaseRest , BaseChecks, ENDPOINTS, testConfig,  } from '../../../support/base/baseTest.js'
import { generateUser } from '../../../data/dynamic/userFaker.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.enduranceThresholds; 

const base_uri = testConfig.environment.hml.url
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    const userGenerate = generateUser(); // cria usuário
    const postRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userGenerate);
    return {responseData: postRes.json(), user: userGenerate}
}
export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}

export default function(data) {
    const loginRes = baseRest.post( ENDPOINTS.LOGIN_ENDPOINT, {email: data.user.email, password: data.user.password});
    baseChecks.checkStatusCode(loginRes, 200);
    baseChecks.checkResponseTime(loginRes, 3500);
    console.log(loginRes.json().message);
}

sleep(1)