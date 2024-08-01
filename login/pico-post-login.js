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

 // Teste de pico

 export const options = {
    // Key configurations for spike in this section
    stages: [
      { duration: '3s', target: 600 }, // fast ramp-up to a high point
      // No plateau
      { duration: '15s', target: 0 }, // quick ramp-down to 0 users
    ],
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
