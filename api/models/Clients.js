const S = require("sequelize")
const db = require("../db")

class Client extends S.Model{}

Client.init({
    CUIT:{
        type: S.INTEGER
    },
    bussinessName:{
        type: S.STRING
    },
    Email:{
        type:S.STRING,
        validate:{
        isEmail:true
    }
    },
    legalAddress:{
        type: S.STRING
    },
    startContratDate:{
        type:S.DATE
    },
    EndContratDate:{
        type:S.DATE
    },

},{
    sequelize: db, modelName: "client"
})

module.exports= Client