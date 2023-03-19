const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {

    id: {type: DataTypes.UUID, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "user"},
    level: {type: DataTypes.STRING},
    FIO: {type: DataTypes.TEXT},
    password: {type: DataTypes.STRING},
    telephone: {type: DataTypes.STRING},
    age:{type:DataTypes.INTEGER}

});


module.exports = {
    User
}