import http from 'k6/http';
import { check, sleep } from 'k6';
import { generateRandomEmail, createUser } from '../utils.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function setup() {
   const baseURL = 'http://localhost:3000'
   const user = {
       nome:`Oji ${Math.random()}`,
       email: generateRandomEmail(),
       password: 'senhasegura',
       administrador: 'false',
       
   };
   const res = createUser(baseURL, user);
   return user

}

export const options = {
    vus: 800,
    duration: '10s',
    thresholds: {
        http_req_failed: ['rate<0.05'],
       http_req_duration: ['p(95)<900'],
    },
};


export function handleSummary(data) {
   return {
       'summary.html': htmlReport(data),
   };
}

export default function (data) {
    const baseURL = 'http://localhost:3000';
    const loginPayload = JSON.stringify({
       email: data.email,
       password: data.password,
    });
    const res = http.post(`${baseURL}/login`, loginPayload, {
       headers: {
         'Content-Type': 'application/json',
       }
     })
    
       
     console.log(res.body)

    check(res, { 'status was 200': (r) => r.status === 200 });

    sleep(1);
}
