import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


// Teste escalabilidade
export const options = {
    // Key configurations for avg load test in this section
    stages: [
      { duration: '10s', target: 50 }, // traffic ramp-up from 1 to 500 users over 10 seconds.
      { duration: '15s', target: 80 }, // stay at 80 users for 15 seconds
      { duration: '20s', target: 0 }, // ramp-down to 0 users
      
    ],
    thresholds: {
      http_req_failed: ['rate<0.05'],
      http_req_duration: ['p(95)<500'],
  },
  };
  
export function handleSummary(data) {
    return {
        'summary.html': htmlReport(data),
    };
}


export default function () {
    let res = http.get('http://localhost:3000/usuarios');
    // console.log(res.body)

    check(res, { 'status was 200': (r) => r.status === 200 });

    sleep(1);
}