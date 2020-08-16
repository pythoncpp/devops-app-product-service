FROM node:13-slim

WORKDIR /code

COPY . .

EXPOSE 3000

ENTRYPOINT node server.js
