const { faker } = require('./lib/node_modules/@faker-js/faker/locale/pt_BR')
const fs = require( 'fs');

const quantidade = 5; 

const usuarios = [];

for(let i = 0; i < quantidade; i++){
    const usuario = {
        
        nome: faker.internet.userName(),
        email: faker.internet.email({ provider: 'exemplo.qa.com.br' }),
        password: faker.internet.password(),
        administrador: "true"
        
    }
    usuarios.push(usuario)
}


fs.writeFileSync('users.json', JSON.stringify(usuarios, null, 2), error =>{
    if(error) {
        console.error(error)
    }
})