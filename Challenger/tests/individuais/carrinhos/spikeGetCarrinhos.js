import { sleep } from 'k6';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig, generateProduct, generateUser } from '../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.spikeThresholds; 

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}

export function setup() {
    let tokens = [];
    let productIds = []; // Array para armazenar todos os IDs de produtos

    for (let i = 0; i < 20; i++) {
        const userPayload = generateUser();
        const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);

        baseChecks.checkStatusCode(userRes, 201);

        const loginPayload = { email: userPayload.email, password: userPayload.password };
        const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, loginPayload);

        baseChecks.checkStatusCode(loginRes, 200);

        const authToken = loginRes.json().authorization;

        const productPayload = generateProduct();
        const productResponse = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': ` ${authToken}` });
        baseChecks.checkStatusCode(productResponse, 201);

        const productId = productResponse.json()._id;
        productIds.push(productId); // Armazena o ID do produto

        const payload = {
            produtos: [{
                idProduto: productId,
                quantidade: 1
            }]
        };
        const cartResponse = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, { 'Authorization': ` ${authToken}` });
        baseChecks.checkStatusCode(cartResponse, 201);

        tokens.push(authToken);
    }
    
    // Retorne um objeto contendo tokens e productIds
    return { tokens, productIds };
}

export default function () {
    try {
        const getRes = baseRest.get(ENDPOINTS.CARTS_ENDPOINT);
        console.log(getRes.body);
        baseChecks.checkStatusCode(getRes, 200);
        baseChecks.checkResponseTime(getRes, 500);
    } catch (error) {
        console.error(`Erro ao realizar GET no carrinho ${error}`);
    }

    sleep(1);
}

export function teardown(data) {
    const { tokens, productIds } = data; // Desestruturando os dados recebidos
    // Delete carts
    try {
        for (let i = 0; i < tokens.length; i++) {
            const deleteRes = baseRest.delete(`${ENDPOINTS.CARTS_ENDPOINT}/cancelar-compra`, { 'Authorization': ` ${tokens[i]}` });
            baseChecks.checkStatusCode(deleteRes, 200);
            console.log(`Cart deleted: ${deleteRes.body}`);
        }
    } catch (error) {
        console.error(`Não foi possível excluir o carrinho: ${error}`);
    }

    // Delete products
    try {
        for (let i = 0; i < productIds.length; i++) {
            const deleteProductRes = baseRest.delete(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productIds[i]}`, { 'Authorization': ` ${tokens[0]}` });
            baseChecks.checkStatusCode(deleteProductRes, 200);
            console.log(`Produto excluído: ${deleteProductRes.json().message}`);
        }
    } catch (error) {
        console.error(`Não foi possível excluir os produtos: ${error}`);
    }

    // Delete users
    try {
        const getUserRes = baseRest.get(`${ENDPOINTS.USER_ENDPOINT}`);
        baseChecks.checkStatusCode(getUserRes, 200);
        const users = getUserRes.json().usuarios || [];

        for (let i = 0; i < users.length; i++) {
            const deleteUserRes = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${users[i]._id}`, { 'Authorization': ` ${tokens[0]}` });
            baseChecks.checkStatusCode(deleteUserRes, 200);
            console.log(`Usuário excluído: ${deleteUserRes.json().message}`);
        }
    } catch (error) {
        console.error(`Não foi possível excluir os usuários: ${error}`);
    }
}
