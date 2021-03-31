import { engine } from './engine/index.js';
import express from 'express';
import http from 'http';
import { API_PORT, hosts } from './env';
import consola from 'consola';

const app = express();
const server = new http.Server(app);
engine(server);

app.listen(API_PORT, () => {
  consola.info(`Api listening on port ${Number(API_PORT)}!`);
});

server.listen(Number(API_PORT) + 1, () => {
  consola.info(`Engine listening on port ${Number(API_PORT) + 1}!`);
  consola.info(`Api and engine whitelisted for ${hosts}`);
});