// import http from 'k6/http';
// import { check, sleep } from 'k6';
// import { SharedArray } from 'k6/data';
// import { BaseRest  } from '../services/baseRest.js';

// export const options = {
//   vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
//   duration: '1s', // This can be shorter or just a few iterations
  
// };

// const base_uri = 'http://localhost:3000'
// const baseRest = new BaseRest(base_uri)

// const data = new SharedArray('Users', function () {
//   const jsonData = JSON.parse(open('../data/static/user.json'));
//   return jsonData.users; // must be an array
// });

// const payload  = {
//   "nome": "Fulano da Silva",
//   "email": "fulano@qa.com",
//   "password": "teste",
//   "administrador": "true"
// }

// export function setup() {
//   const res = baseRest.post('/usuarios', payload)
//   check(res, {
//     'status should be 201': (r) => r.status === 201
//   })
//   return { responseData : res.json() }
// }


// export default () => {
//   let userIndex = __ITER % data.length;
//   let user = data[userIndex];

//   const urlRes = baseRest.post('/login', user);

//   check(urlRes, {
//     'is status 200': (r) => r.status === 200,
//   });
//    console.log('REALIZANDO LOGIN')
//    sleep(1);
   
//  };

// export function teardown(responseData) {
//   const userId = responseData.responseData._id
//   const res = http.del(`http://localhost:3000/usuarios/${userId}`)
//   check(res, {
//     'status should be 200': (r) => r.status === 200
//   })
//   console.log(`teardown deletando o usuario com ID ${userId}`)
// }


import http from 'k6/http';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig  } from '../support/base/baseTest.js'

export const options =  testConfig.options.smokeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/static/user.json'));
  return jsonData.users; // must be an array
});

const payload = {
  "nome": "Fulano da Silva",
  "email": "fulano@qa.com",
  "password": "teste",
  "administrador": "true"
}

export function setup() {
  const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)

  baseChecks.checkStatusCode(res, 201)
  
  return { responseData: res.json() }
}

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];

  const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);

  baseChecks.checkStatusCode(urlRes, 200)

  // Exemplo de uso do método GET
  const getUserRes = baseRest.get(ENDPOINTS.USER_ENDPOINT + `/${user._id}`);

  baseChecks.checkStatusCode(getUserRes, 200)
  // check(getUserRes, {
  //   'is status 200': (r) => r.status === 200,
  // });
  console.log(`Usuário obtido: ${getUserRes.body}`);

  sleep(1);
};

export function teardown(responseData) {
  const userId = responseData.responseData._id;
  
  const res = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${user._id}`);

  baseChecks.checkStatusCode(res, 200)
  
  console.log(`teardown deletando o usuario com ID ${userId}`);
}