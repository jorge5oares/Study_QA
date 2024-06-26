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

describe('Ordenação', () => {
    it('deve ordenar um array de números positivos em ordem crescente', () => {
      const numeros = [5, 2, 4, 1, 3];
      const resultadoOrdenado = ordenarNumeros(numeros);
      expect(resultadoOrdenado).toEqual([1, 2, 3, 4, 5]);
    });
})

