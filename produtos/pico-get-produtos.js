import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { createUser, generateRandomEmail, login } from '../utils.js';

export function setup() {
    const baseURL = 'http://localhost:3000'
    const email = generateRandomEmail();
    const user = {
        nome:`Oji ${Math.random()}`,
        email: email,
        password: 'senhasegura',
        administrador: 'false',
    } 
let res = createUser(baseURL, user);
let token = JSON.parse(login(user).body).authorization;
return token


    };

// pico
export const options = {
    thresholds: {
        http_req_failed: ['rate<0.1'],// http errors should be less than 1%
        http_req_duration: ['p(95)<2000'],
    },
    // Key configurations for spike in this section
    stages: [
      { duration: '5s', target: 200 }, // fast ramp-up to a high point
      // No plateau
      { duration: '2s', target: 0 }, // quick ramp-down to 0 users
    
    ],
  };

export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}


export default function (data) {
    let res = http.get('http://localhost:3000/produtos');
    // console.log(res.body)

    check(res, { 'status was 200': (r) => r.status === 200 });

    sleep(1);
}