
## Introdução
Esta matriz de rastreabilidade documenta os cenários de teste de performance utilizando a ferramenta K6. Os testes estão divididos em diferentes tipos: capacidade, endurance, carga, pico e estresse para vários endpoints (usuários, produtos, login e carrinhos).

## Cenários de Teste

### Usuários

| Tipo de Teste      | Descrição                                     | Parâmetros de Teste                                    | Métricas de Desempenho Esperadas    |
|--------------------|-----------------------------------------------|-------------------------------------------------------|-------------------------------------|
| **Capacity POST**  | Teste de capacidade para POST /usuarios       | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Endurance POST** | Teste de endurance para POST /usuarios        | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Load GET**       | Teste de carga para GET /usuarios             | `vus: 150`, `duration: 20s`                           | `http_req_duration: p(95)<6000`, `http_req_failed: rate<0.1` |
| **Spike POST**     | Teste de pico para POST /usuarios             | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<5000`, `http_req_failed: rate<0.1` |
| **Stress GET**     | Teste de estresse para GET /usuarios          | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<4000`, `http_req_failed: rate<0.1` |

### Produtos

| Tipo de Teste       | Descrição                                    | Parâmetros de Teste                                    | Métricas de Desempenho Esperadas    |
|---------------------|----------------------------------------------|-------------------------------------------------------|-------------------------------------|
| **Capacity POST**   | Teste de capacidade para POST /produtos      | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Endurance POST**  | Teste de endurance para POST /produtos       | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Load POST**       | Teste de carga para POST /produtos           | `vus: 150`, `duration: 20s`                           | `http_req_duration: p(95)<6000`, `http_req_failed: rate<0.1` |
| **Spike POST**      | Teste de pico para POST /produtos            | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<5000`, `http_req_failed: rate<0.1` |
| **Stress GET**      | Teste de estresse para GET /produtos         | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<4000`, `http_req_failed: rate<0.1` |

### Login

| Tipo de Teste      | Descrição                                      | Parâmetros de Teste                                    | Métricas de Desempenho Esperadas    |
|--------------------|------------------------------------------------|-------------------------------------------------------|-------------------------------------|
| **Capacity**       | Teste de capacidade para POST /login           | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Endurance**      | Teste de endurance para POST /login            | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Load**           | Teste de carga para POST /login                | `vus: 150`, `duration: 20s`                           | `http_req_duration: p(95)<6000`, `http_req_failed: rate<0.1` |
| **Spike**          | Teste de pico para POST /login                 | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<5000`, `http_req_failed: rate<0.1` |
| **Stress**         | Teste de estresse para POST /login             | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<4000`, `http_req_failed: rate<0.1` |

### Carrinhos

| Tipo de Teste      | Descrição                                     | Parâmetros de Teste                                    | Métricas de Desempenho Esperadas    |
|--------------------|-----------------------------------------------|-------------------------------------------------------|-------------------------------------|
| **Capacity GET**   | Teste de capacidade para GET /carrinhos       | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Endurance GET**  | Teste de endurance para GET /carrinhos        | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<2000`, `http_req_failed: rate<0.1` |
| **Load GET**       | Teste de carga para GET /carrinhos            | `vus: 150`, `duration: 20s`                           | `http_req_duration: p(95)<6000`, `http_req_failed: rate<0.1` |
| **Spike GET**      | Teste de pico para GET /carrinhos             | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<5000`, `http_req_failed: rate<0.1` |
| **Stress GET**     | Teste de estresse para GET /carrinhos         | `duration` e `target` conforme especificado.          | `http_req_duration: p(95)<4000`, `http_req_failed: rate<0.1` |

## Observações Gerais
- **Status Code Esperado:** Em todos os testes, o código de status esperado deve ser 200 (não 201).
- **Métricas de Desempenho:** As métricas de desempenho são definidas com base no percentil 95 (p(95)) da duração da requisição HTTP e a taxa de falhas das requisições.

### _Código feito com auxilio do Chat GPT._