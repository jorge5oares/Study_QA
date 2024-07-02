import assert from 'assert'
import {expect} from 'chai'
import Calculadora from '../src/Calculadora.js'
//const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)

    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)

    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 5 e 5 resultando em 25', () => {
        let resultado = Calculadora.mult(5, 5)
        expect(resultado).to.be.eq(25)

    })
})
// a partir daqui eu posso fazer uns calaulos mais "complexos",como o de ordenazação:

describe('Testes de divisão', () => {
    it('Deve dividir 6 e 2 resultando em 3', ()=> {
        let resultado = Calculadora.div(6,2)
        expect(resultado).to.be.eq(3)
    })
})

describe('Conversor de temperatura Celsius para Kelvin', () => {
    it('Deve converter a temperatura para Kelvin' , ()=> {
       let resultado = Calculadora.celsiusParaKelvin(21)
       expect(resultado).to.be.lessThanOrEqual(294.15)
})
})
