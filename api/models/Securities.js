const S = require("sequelize");
const db = require("../db");

const { hash, genSalt } = require("bcrypt");

class Securities extends S.Model {
  setHash(password, salt) {
    return hash(password, salt);
  }
}
Securities.init(
  {
    name: {
      type: S.STRING,
    },
    lastName: {
      type: S.STRING,
    },
    CUIL: {
      type: S.INTEGER,
    },
    entryHour: {
      type: S.INTEGER,
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    status:{
      type: S.BOOLEAN,
      defaultValue:true
    },
    password: {
      type: S.STRING,
    },
    address:{
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
    date:{
         type: S.DATEONLY
       },
  },
  {
    sequelize: db,
    modelName: "securities",
  }
);
Securities.sync({ alter: true })
Securities.beforeCreate(async (securities) => {
  salt = await genSalt(16);
  securities.password = await hash(securities.password, salt);
});
module.exports = Securities;
