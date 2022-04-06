const S = require("sequelize");
const db = require("../db");

class WorkDay extends S.Model {}

WorkDay.init(
  {
    date:{
      type: S.DATEONLY 
    },
    entryHour: {
      type: S.DATE,
    },
    wishEntryHour: {
      type: S.STRING, 
    },
    closingHour: {
      type:S.DATE,
    },
    wishClosingHour: {
      type:  S.STRING,
    },
    serverHourEntry: {
      type: S.DATE,
      defaultValue: S.NOW,
    },
    serverHourClosing: {
      type: S.DATE,
      defaultValue: S.NOW,
    },
    status: {
      type: S.BOOLEAN,
    },
    comment: {
      type: S.TEXT,
    },
    imageSecurity: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "workDay",
  }
);

/* WorkDay.beforeCreate((workday)=>{
  const dates= workday.wishEntryHour
  workday.dates= dates
  return workday.save()
})
 */

WorkDay.sync({ alter: true })

module.exports = WorkDay;
