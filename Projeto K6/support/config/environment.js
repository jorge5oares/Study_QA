import { options } from "k6/http";

export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    options: {
        smokeThresholds:{
            vus: 1, 
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.1']
            }
   
        }
    }
}