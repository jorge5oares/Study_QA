export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    options: {
        loadThresholds:{
            vus: 150, 
            duration: '20s',
            thresholds: {
                http_req_duration: ['p(95)<6000'],
                http_req_failed: ['rate<0.1']
            }
   
        },
        stressThresholds:{
            stages: [
                { duration: '3m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
                { duration: '5m', target: 200 }, // stay at higher 200 users for 30 minutes
                { duration: '1m', target: 0 }, // ramp-down to 0 users
              ],
            thresholds: {
                http_req_duration: ['p(95)<4000'],
                http_req_failed: ['rate<0.1']
            }
   
        },
        spikeThresholds:{
            stages: [
                { duration: '30s', target: 500 }, // fast ramp-up to a high point
                // No plateau
                { duration: '15s', target: 0 }, // quick ramp-down to 0 users
              ],
            thresholds: {
                http_req_duration: ['p(95)<5000'],
                http_req_failed: ['rate<0.1']
            }
        },
        capacityThresholds: {
            stages: [
                { duration: '2m', target: 150 },
                { duration: '3m', target: 150 },
                { duration: '2m', target: 0 },
            ],
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.1']
            }
        },
        enduranceThresholds:{
            stages: [
                { duration: '1m', target: 100},
                { duration: '2m', target: 100},
                { duration: '30s', target: 0},
            ],
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.1']
            }
        },
        teste: {
            setupTimeout: '600s',
            teardownTimeout: '600s',
            vus: 1,
            iterations: 1,
        }
    }
}