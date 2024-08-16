import Faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export const generateProduct = () => ({

    nome: new Date().getTime() + ' ' + Faker.commerce.productName(),
    preco: Faker.commerce.price(1, 1000),
    descricao: Faker.commerce.productName(),
    quantidade: Faker.random.number({ min: 1, max: 5000000 }),

});