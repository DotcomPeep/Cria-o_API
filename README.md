- O que é API?
-- Application Programming Interface (Interface de Programação de Aplicações)

______________________________________________________________________________

- WebServices = Serviços da web

______________________________________________________________________________

- REST
-- Representational State Transfer (Transferência de Estado Representacional)

______________________________________________________________________________

- RESTful

______________________________________________________________________________

- Exemplo:

usando método GET pode-se acessar a url - https://meusite.com.br/api/users

GET https://meusite.com.br/api/user/10 -> (10 seria o id de um usuário) (pegando informações deste usuário)

PUT https://meusite.com.br/api/user/10 -> alterando as informações do usuário (name: 'nome', age: x)

POST https://meusite.com.br/api/users -> adicionando uma nova informação (neste caso, um novo usuário)

DELETE https://meusite.com.br/api/user/10 -> deletando o usuário 10

______________________________________________________________________________

- INICIANDO PROJETO

npm init -y

npm install dotenv express pg pg-hstore sequelize validator

tsc --init (criando um tsconfig)

em tsconfig.json alterar a rootDir e a outDir (neste caso './src' / './dist', respectivamente)

em moduleResolution "node"

npm install -D @types/express @types/node @types/sequelize @types/validator

preparar o servidor no arquivo server.ts

instalar o nodemon global na máquina (npm install -g nodemon)

alterar o json com o comando do nodemon

"start-dev": "nodemon -e ts,json src/server.ts"

npm run start-dev

______________________________________________________________________________

- CORS
-- Cross-origin Resource Sharing

-- Uma política que é adotada pelos navegadores, aplicativos... qualquer sistema que faça requisições. Ela bloqueia, por padrão, que você faça requisições de uma url para outra url, com dominío diferente, a não ser que o sistema permita isso.

npm install cors
npm install -D @types/cors

server.use(cors()); --> assim a configuração fica padrão, logo, tudo fica liberado

server.use(cors({ --> origin (qualquer site pode fazer requisição) methods (apenas dos métodos GET e POST)
    origin: '*',
    methods: ['GET', 'POST']
}));
______________________________________________________________________________

Teste de API:
resttesttest.com
______________________________________________________________________________

Instalar Postman
______________________________________________________________________________

- CRUD

-- Create
-- Read
-- Update
-- Delete

______________________________________________________________________________

- DBEAVER & Postgres

______________________________________________________________________________

- Entendendo HTTP Status Code

-- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

______________________________________________________________________________

GET /frase/aleatoria - pega uma frase aleatoriamente

*IMPORTANTE*

--tomar cuidado com a ordem das rotas, uma pode atrapalhar a outra dependendo da ordem de ambas

colocar rotas fixas primeiro

GET /frase/aleatoria
GET /frase/:id