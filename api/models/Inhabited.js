const S = require("sequelize");
const db = require("../db");

class Inhabited extends S.Model {}

Inhabited.init(
  {
    type: {
      type: S.STRING,
    },
    inhabitedDate: {
      type: S.DATE,
    },
    reason: {
      type: S.TEXT,
    }
  },
  {
    sequelize: db,
    modelName: "inhabited",
  }
);

module.exports = Inhabited;
