// IMPORTAÇÃO DO MÓDULO SEQUELIZE
const sequelize = require("sequelize");

// CRIA A CONEXÃO COM O BANCO DE DADOS POR MEIO DO SEQUELIZE
/*
PARÂMETROS:
1º - Nome do banco de dados
2º - Usuário do banco de dados
3º - Senha do banco de dados
4º - Objeto JSON com banco de configuração:
        1 - Host do banco de dados
        2 - A porta lógica do banco de dados
        3 - Dialeto sql a ser utilizado
        4 - Timezone
*/

const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        timezone: "-03:00"
    }
);

module.exports = connection;