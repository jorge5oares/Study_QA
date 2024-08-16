import { BaseRest, BaseChecks, ENDPOINTS, testConfig, generateProduct, generateUser } from '../../support/base/baseTest.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.loadThresholds; 

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}

export default function () {
    const userPayload = generateUser();
    const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
    const userID = userRes.json()._id
    baseChecks.checkStatusCode(userRes, 201);

    const loginPayload = { email: userPayload.email, password: userPayload.password };
    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, loginPayload);

    baseChecks.checkStatusCode(loginRes, 200);

    const authToken = loginRes.json().authorization;

    const productPayload = generateProduct();
    const productResponse = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': ` ${authToken}` });
    baseChecks.checkStatusCode(productResponse, 201);

    const productId = productResponse.json()._id;
    

    const payload = {
        produtos: [{
            idProduto: productId,
            quantidade: 1
        }]
    };
    const cartResponse = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, { 'Authorization': ` ${authToken}` });
    baseChecks.checkStatusCode(cartResponse, 201);

    const cartId = cartResponse.json()._id;
    
    // Delete carts
    try {
        
            const deleteRes = baseRest.delete(`${ENDPOINTS.CARTS_ENDPOINT}/cancelar-compra`, { 'Authorization': ` ${authToken}` });
            baseChecks.checkStatusCode(deleteRes, 200);
            console.log(`Cart deleted: ${deleteRes.body}`);
        
    } catch (error) {
        console.error(`Não foi possível excluir o carrinho: ${error}`);
    }

    // Delete products
    try {
        
            const deleteProductRes = baseRest.delete(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 'Authorization': ` ${authToken}` });
            baseChecks.checkStatusCode(deleteProductRes, 200);
            console.log(`Produto excluído: ${deleteProductRes.json().message}`);
        
    } catch (error) {
        console.error(`Não foi possível excluir os produtos: ${error}`);
    }

    // Delete users
    try {
            const deleteUserRes = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${userID}`, { 'Authorization': ` ${authToken}` });
            baseChecks.checkStatusCode(deleteUserRes, 200);
            console.log(`Usuário excluído: ${deleteUserRes.json().message}`);
        
    } catch (error) {
        console.error(`Não foi possível excluir os usuários: ${error}`);
    }
    
}