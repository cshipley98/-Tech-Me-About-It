// import Sequelize constructor from the library 
const Sequelize = require('sequelize');

// import dotenv for password security 
require('dotenv').config();

// create connection to our database, pass in MySql info for username/password
let sequelize;
