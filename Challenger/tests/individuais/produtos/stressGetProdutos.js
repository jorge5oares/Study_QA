import { sleep } from 'k6';
import { BaseRest , BaseChecks, ENDPOINTS, testConfig, generateProduct, generateUser} from '../../../support/base/baseTest.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.stressThresholds; 

const base_uri = testConfig.environment.hml.url
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();


export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}


export function setup() {
    const userPayload = generateUser();
    const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
    const userId = userRes.json()._id

    // baseChecks.checkStatusCode(userRes, 201);

    const loginPayload = { email: userPayload.email, password: userPayload.password };
    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, loginPayload);

    baseChecks.checkStatusCode(loginRes, 200);

    const authToken = loginRes.json().authorization;

    const productPayload = generateProduct();
    const productResponse = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': `${authToken}` });
    baseChecks.checkStatusCode(productResponse, 200);

    const productId = productResponse.json()._id;

    return { authToken, productId, userId };
}

export default function (data) {
    const authToken = data.authToken;

    try {
        const getRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT, { 'Authorization': `${authToken}` });

        baseChecks.checkStatusCode(getRes, 200);
        baseChecks.checkResponseTime(getRes, 500);
    } catch (error) {
        console.error(`Erro ao realizar GET no produto ${productId}: ${error}`);
    }

    sleep(1);
}

export function teardown(data) {
    const authToken = data.authToken;
    const productId = data.productId;
    const userId = data.userId;

    if (productId) {
        try {
            const deleteRes = baseRest.delete(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 'Authorization': `${authToken}` });
            baseChecks.checkStatusCode(deleteRes, 200);
            console.log(`Produto ${productId} excluído: ${deleteRes.json().message}`);
        } catch (error) {
            console.error(`Não foi possível excluir o produto ${productId}: ${error}`);
        }
    }

    if (userId) {
        try {
            const deleteUserRes = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${userId}`, { 'Authorization': `${authToken}` });
            baseChecks.checkStatusCode(deleteUserRes, 200);
            console.log(`Usuário ${userId} excluído: ${deleteUserRes.json().message}`);
        } catch (error) {
            console.error(`Não foi possível excluir o usuário ${userId}: ${error}`);
        }
    }
}