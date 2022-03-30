const S = require("sequelize");
const db = require("../db");

class WorkDay extends S.Model {}

WorkDay.init(
  {
    entryHour: {
      type: S.DATE,
    },
    wishEntryHour: {
      type: S.DATE,
    },
    closingHour: {
      type: S.DATE,
    },
    wishClosingHour: {
      type: S.DATE,
    },
    status:{
      type: S.BOOLEAN,
      defaultValue:true
    },
    comment:{
      type: S.TEXT
    }

  },{
    sequelize: db,
    modelName: "workDay",
  }
);
module.exports = WorkDay;
