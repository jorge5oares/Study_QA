import { sleep } from 'k6';
import { BaseRest , BaseChecks, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js'
import { generateUser } from '../../../data/dynamic/userFaker.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.capacityThresholds; 

const base_uri = testConfig.environment.hml.url
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}

export default function() {
    const userPayload = generateUser() 
    const allUsers = baseRest.post( ENDPOINTS.USER_ENDPOINT, userPayload);
    baseChecks.checkStatusCode(allUsers, 201);
    baseChecks.checkResponseTime(allUsers, 3500);
    console.log(allUsers.body)
    sleep(1)
}

export function teardown() {

    const getRes = baseRest.get(ENDPOINTS.USER_ENDPOINT);

    for (let i = 0; i < getRes.json().usuarios.length; i++) {
        const usuario = getRes.json().usuarios[i];
        const delres = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${usuario._id}`, { headers: { 'Content-Type': 'application/json' } });
        baseChecks.checkStatusCode(delres, 200);
        console.log(delres)
}
}







