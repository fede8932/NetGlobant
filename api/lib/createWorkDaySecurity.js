const { WorkDay, Securities } = require("../models");

const createWorkDay = async (req) => {
  const workDay = await WorkDay.create(req.body);
  const security = await Securities.findOne({
    where: { name: req.body.name },
  });
  console.log(security)
  security.addWorkDays(workDay);
  return security;
};

module.exports = createWorkDay;
