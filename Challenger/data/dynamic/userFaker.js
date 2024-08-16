import Faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export function generateUser() {
    return {
        "nome": Faker.name.findName(),
        "email": new Date().getTime() + __VU + Faker.internet.email(),
        "password": Faker.internet.password(),
        "administrador": "true"

    };
}