import http from 'k6/http';
import { check } from 'k6';


export function randomStringChar (length) {
    const characters = 'ADCEFGabcdefg0123456789';
    let result = '';
    const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
}

// Função para gerar um email aleatório
export function generateRandomEmail() {
  const randomString = randomStringChar(10);
  let email =  `usuario${randomString}@teste.com`;
  console.log(email);
  return email;
}

export function createUser(baseURL, user) {
    const url = `${baseURL}/usuarios`;
    const payload = JSON.stringify(user);
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const res = http.post(url, payload, params);
  
    check(res, {
      'create user status is 201': (r) => r.status === 201,
      'create user message is correct': (r) => r.json().message === 'Cadastro realizado com sucesso',
    });
  
    return res.json();
  }