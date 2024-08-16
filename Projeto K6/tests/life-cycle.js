import { sleep } from 'k6';

// 1. init code
//(inicializa  variaveis, define options (VUS, DURATIONS, tresholds))

let counter  = 1
export function setup() {
    // 2. setup code
    console.log( 'SETUP ${counter}' )
}
  
export default function (data) {
    console.log('FUNÇÃO PRINCIPAL - ${counter} VU=${__VU} ITER=${__ITER}')
    counter  = counter + 1
    sleep(1)
    // 3. VU code
  }
  
export function teardown() {
    // 4. teardown code
    console.log('TEARDOWN - ${counter}')
  }