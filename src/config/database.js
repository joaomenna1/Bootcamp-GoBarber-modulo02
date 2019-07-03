module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/**
 * timestramps garante que teremos uma coluna de create app, update app dentro
 * do banco de dados, para saber do ultimo registro foi editado.
 * underscored garante no sequelize uma padronização de nomemclatura de tabelas
 * e colunas underscored .
 * exemplo: user_groups e nao userGroups.
 * */
