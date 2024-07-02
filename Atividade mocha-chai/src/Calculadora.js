
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

    static div(a, b) {
        return a / b
    }
    // Conversor de temperatura
    static celsiusParaKelvin(celsius){
        const kelvin = celsius + 273.15;
        return kelvin
    }
     


}
