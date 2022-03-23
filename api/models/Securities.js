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
    hoursPerDay: {
      type: S.INTEGER,
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "securities",
  }
);

Securities.beforeCreate(async (securities) => {
  securities.salt = await genSalt(16);
  securities.password = await hash(securities.password, securities.salt);
});
module.exports = Securities;
