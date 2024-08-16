import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';


export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '10s', // This can be shorter or just a few iterations
};


const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/static/user.json'));
  return jsonData.users; // must be an array
});



export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
  console.log(user)

  const urlRes = http.post('http://localhost:3000/login', user);

  check(urlRes, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};