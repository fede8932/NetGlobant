const S = require("sequelize")
const db = require("../db")

class Admin extends S.Model{}

Admin.init({
    name: {
        type: S.STRING,
    },
    email: {
        type: S.STRING,
        isEmail: true
    },
    password: {
        type: S.STRING,
        allowNull:false
    },
    salt:{
        type: S.STRING
    }
},{
    sequelize: db, modelName: "admin"
})
module.exports= Admin