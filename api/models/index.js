const Admin = require("./Admin");
const BranchOficce = require("./BranchOficce");
const Client = require("./Clients");
const Provincies = require("./Provincies");
const Securities = require("./Securities");
const WorkDay = require("./WorkDay");
const Disabled = require("./Disabled");
const AbsenceRequest = require("./AbsenceRequest");
const Events = require("./Events");

Disabled.belongsTo(Securities);
Disabled.belongsTo(Client);
Disabled.belongsTo(BranchOficce);
Disabled.belongsTo(Admin);
AbsenceRequest.belongsTo(Securities);
Client.offices = BranchOficce.belongsTo(Client);
BranchOficce.belongsTo(Provincies);
Events.belongsTo(WorkDay);

Securities.provincie = Securities.belongsToMany(Provincies, {
  through: "provincies_security ",
});
BranchOficce.calendar = BranchOficce.belongsToMany(WorkDay, {
  through: "calendar_office",
});
Securities.calendar = Securities.belongsToMany(WorkDay, { through: "ownTime" });
BranchOficce.security = BranchOficce.belongsToMany(Securities, {
  through: "yourSecurity",
});

module.exports = {
  Admin,
  BranchOficce,
  Client,
  Provincies,
  Securities,
  WorkDay,
  AbsenceRequest,
  Disabled,
  Events,
};
