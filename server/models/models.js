const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
        id: { type: DataTypes.UUID, primaryKey: true},
        email: { type: DataTypes.STRING, unique: true},
        password: { type: DataTypes.STRING},
        role: { type: DataTypes.STRING, defaultValue: "user"}
        // references: {
        //                 model: Role,// This is the column name of the referenced model
        //                 key: 'name', // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        //                 deferrable: Deferrable.INITIALLY_IMMEDIATE
        //         }
});
// const Role = sequelize.define('role',{
//         name: { type: DataTypes.UUID, primaryKey: true}
// });
//
// User.hasMany(Role)
// Role.belongsTo(User)
module.exports = {
        User
}