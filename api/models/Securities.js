const S = require("sequelize")
const db = require("../db")

class Securities extends S.Model{}

Securities.init({
    name:{
        type: S.STRING
    },
    lastName:{
     type: S.STRING
    },
    CUIL:{
        type: S.INTEGER
    },
    entryHour:{
        type: S.INTEGER
    },
    hoursPerDay:{
        type: S.INTEGER
    },
    email:{
        type: S.STRING,
        validate:{
            isEmail:true
        }
    }

},{
    sequelize: db, modelName: "securities"
})
module.exports= Securities