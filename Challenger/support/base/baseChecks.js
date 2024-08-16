import { check } from 'k6';

export class BaseChecks {


    checkStatusCode(response, expectedStatus = 200 ){
        check(response, {
            'status code check': (r) => r.status === expectedStatus
        })
    }

    checkErrorRate(response, maxErrorRate) {
        const totalRequests = __ITER + 1;
        const errorRate = (__ITER - response.status === 200 ? 1 : 0) / totalRequests;

        check(response, {
            'Verificação da taxa de erro': () => errorRate <= maxErrorRate
        });
    }

    checkResponseTime(response, maxTime) {
        check(response, {
            'Verificação do tempo de resposta': (r) => r.timings.duration <= maxTime
        });
    }

}
