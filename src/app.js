// metodo antigo
// const express = require('express');
// const routes = require('./routes');
//para utilizar a sintaxe  a seguir precisa 
// de um yarn add sucrase

import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
     this.server.use(routes);
  }
}

export default new App().server;