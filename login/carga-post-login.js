import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function () {
    const url = 'http://localhost:3000/#/Login/post_login';
    const payload = JSON.stringify({
        email: "fulano@qa.com",
        password: "teste",
    });


export const options = {
    vus: 310,
    duration: '2s',
    thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<500'],
    },
};


export default function () {
    let res = http.post('http://localhost:3000/login'); 
        
    console.log(res.body)

    check(res, { 'status was 200': (r) => r.status === 200 });

    sleep(1);
}


}