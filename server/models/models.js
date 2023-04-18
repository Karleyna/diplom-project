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
const Posts = sequelize.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
});

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const PostInfo = sequelize.define('post_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    file:{type: DataTypes.STRING, allowNull: true},
});
 const Certificate = sequelize.define( 'certificate', {
     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
     title: {type: DataTypes.STRING, allowNull: false}
 });

Category.hasMany(Posts);
Posts.belongsTo(Category);

User.hasMany(Certificate);
Certificate.belongsTo(User);

Posts.hasMany(PostInfo);
PostInfo.belongsTo(Posts);



module.exports = {
    User,
    Posts,
    Category,
    PostInfo,
    Certificate
}