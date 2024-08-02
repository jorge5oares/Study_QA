import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
    stages: [
        {duration:'20s', target:50},
        {duration:'20s', target:100},
        {duration:'20s', target:200},
    ],
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<2000'],
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