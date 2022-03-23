const S = require("sequelize")
const db = require("../db")

const bcrypt = require("bcrypt");

class Securities extends S.Model{
    hash(password, salt) {
        return bcrypt.hash(password, salt);
      }
}
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

Securities.beforeCreate( async (securities) => {
    const genererSalt= await bcrypt.genSalt(16)
     securities.salt= genererSalt
     const hash= await securities.hash(securities.password, genererSalt)
     return securities.password= hash
  });
module.exports= Securities