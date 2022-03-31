const S = require("sequelize")
const db = require("../db")
const bcrypt = require("bcrypt");

class Admin extends S.Model{
    hash(password, salt) {
        return bcrypt.hash(password, salt);
      }
}

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
    status:{
        type: S.BOOLEAN,
        defaultValue:true
      }
    
},{
    sequelize: db, modelName: "admin"
})

Admin.beforeCreate( async (admin) => {
    const genererSalt= await bcrypt.genSalt(16)
     admin.salt= genererSalt
     const hash= await admin.hash(admin.password, genererSalt)
     return admin.password= hash
  });
  
module.exports= Admin