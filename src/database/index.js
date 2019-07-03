/**
 * Arquivo de inicialização do banco de dados e iniciar os nossos models
 * metodo init() responsavel por carregar o bd e nossos models
 * exportar um new Database()
 * sequelize responsavel de fazer a conexao do bd
 */
import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
