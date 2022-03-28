<<<<<<< HEAD
const provinces= require("../utils/provinces")
const {Provincies}= require("../models")
const db= require("./index")

db.sync({force:true}).then(()=>{ 
   Provincies.bulkCreate(provinces)
})
.then(()=> console.log("seed finalizado"))
.catch((err)=> console.log("aca" ,err))
=======
const db = require("./db");

const Admin = require("../models/Admin");
const Securities = require("../models/Securities");
const Clients = require("../models/Clients");

const adminList = require("./lists/adminList");
const securitiesList = require("./lists/securitiesList");
const clientsList = require("./lists/clientsList");

const setupSeed = async () => {
  console.log("SEED STARTING");

  const admins = await Admin.bulkCreate(adminList);

  const securities = await Securities.bulkCreate(securitiesList);

  const clients = await Clients.bulkCreate(clientsList);

  console.log("Products Seed...");

  return Promise.all([admins, securities, clients]);
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
>>>>>>> origin/cambioMUI/Boot
