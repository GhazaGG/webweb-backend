const Sequelize = require( "sequelize")
const db = new Sequelize('STI202102370','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;