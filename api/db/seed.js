const db = require("./index");
const {Provincies, Admin, Securities, Client}= require("../models")


const provinces= require("../utils/provinces")
const adminList = require("./lists/adminList");
const securitiesList = require("./lists/securitiesList");
const clientsList = require("./lists/clientsList");

const setupSeed = async () => {
  console.log("SEED STARTING");

  const admins = await Admin.bulkCreate(adminList);

  const securities = await Securities.bulkCreate(securitiesList);

  const clients = await Client.bulkCreate(clientsList);
    
  const provincies= await Provincies.bulkCreate(provinces)
  console.log("Products Seed...");

  return Promise.all([admins, securities, clients, provincies]);
};

db.sync({ force: true })
  .then(setupSeed)
  .then(() => {
    console.log("Seed succesfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });

