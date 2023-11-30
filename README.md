# API Criada para o desafio Full Stack da DEVIO

DEPLOY:https://devio-backend-24hc.onrender.com

A API tem o intuito de armazenar, atualizar e descartar pedidos, visando ajudar não só o restaurante mais o cliente , proporcionando uma experiência excelente na hora da fome.

# Como Rodar
UTILIZE O NODE MAIS RECENTE!!

1. Modifique o .env.example para .env e mude a URL para se adequar ao seu banco de dados.
2. Utilize o comando "npm install" para instalar as dependências do projeto.
3. Utilize o comando "npm run build" para criar e iniciar o banco de dados.
4. Por fim para iniciar o projeto utilize "npm start"


# Rotas


GET "/categories" retorna todas as categorias , com o status 200

GET "/extras" retorna todos os adicionais, com o status 200

GET "/foods" retorna todas as comidas , com o status 200

POST "/orders" cria o pedido do cliente retornando 201

DELETE "/orders/:orderId" deleta um pedido caso existente retornando 200

PATCH "/orders/:orderId" atualiza o nome e o status do pedido