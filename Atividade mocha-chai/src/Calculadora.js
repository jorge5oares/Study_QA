
export default class Calculadora {

    static soma(a, b){
        return a + b
    }
    static sub(a, b){
        return a - b
    }

    static mult(a, b) {
        return a * b
    }

    static ordenarNumeros(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error('Argumentos inválidos');
        }
        const numerosOrdenados = ordenarNumeros([a, b]);
        const resultado = a + b;
        
        return `O resultado da soma ${a} + ${b} é ${resultado}. Números ordenados: ${numerosOrdenados}`;
      }
      

}
