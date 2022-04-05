const { WorkDay, Securities } = require("../models");

const createWorkDay = async (req) => {
  console.log(req.body)
  const workDays = await WorkDay.create(req.body);
  console.log(workDays)
  const security = await Securities.findOne({
    where: { name: req.body.name },
  });
  console.log(security)
  security.addWorkDays(workDays);
  return security;
};

module.exports = createWorkDay;
