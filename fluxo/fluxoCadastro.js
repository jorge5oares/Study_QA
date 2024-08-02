import http from 'k6/http';
import { check, sleep } from 'k6';
import { generateRandomEmail, createUser } from '../utils.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { Trend } from 'k6/metrics';

export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
    };
  }
  

 const createUserTrend = new Trend('create_user_duration');
 const loginTrend = new Trend('login_duration');
 const getProductTrend = new Trend('get_product_duration');
 const createProductTrend = new Trend('create_product_duration');
 
 export let options = {
    stages: [
        { duration: '5s', target: 40 }, // 40 users over 15 seconds
        { duration: '10s', target: 500 },
        { duration: '15s', target: 40 },
      ],
    thresholds: {
        create_user_duration: ['p(95)<4000'], // 95% das requisições de criação de usuário devem ser menores que 4s
        login_duration: ['p(95)<2000'], // 95% das requisições de login devem ser menores que 2s
        get_product_duration: ['p(95)<2000'], // 95% das requisições de buscar produtos devem ser menores que 2s
        create_product_duration: ['p(95)<3000'], // 95% das requisições de criação de produto devem ser menores que 3s
    },
};


// API
const BASE_URL = 'http://localhost:3000';


// Função principal do teste
export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

// Cria usuario
 const email = `user_${Math.random().toString(36)}@qa.com.br`;
 const userPayload = JSON.stringify({
    nome: 'Test User',
    email: email,
    password: 'teste',
    administrador: 'true'
 });

 let createUserRes = http.post(`${BASE_URL}/usuarios`, userPayload, params);
 check(createUserRes, { 'user created successfully': (r) => r.status === 201 });
 createUserTrend.add(createUserRes.timings.duration);


// Faz Login

const loginPayload = JSON.stringify({
    email: email,
    password: 'teste',
});

let loginRes = http.post(`${BASE_URL}/login`, loginPayload, params);
check(loginRes, {
    'is status 200': (r) => r.status === 200,
    'is token present': (r) => r.json('authorization') !== '',
});
loginTrend.add(loginRes.timings.duration);

const authToken = loginRes.json('authorization');



// Cria um produto

const parametro = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${authToken}`,
    },
};
const productPayload = JSON.stringify({
    nome: `Produto_${Math.random().toString(36)}`,
    preco: Math.floor(Math.random() * 1000) + 1, // Gera números entre 1 e 1000
    descricao: 'Descrição do produto',
    quantidade: Math.floor(Math.random() * 1000)
});


let createProductRes = http.post(`${BASE_URL}/produtos`, productPayload, parametro);
check(createProductRes, { 'is status 201': (r) => r.status === 201 });
createProductTrend.add(createProductRes.timings.duration);

sleep(1);


}