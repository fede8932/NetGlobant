const provinces= require("../utils/provinces")
const {Provincies}= require("../models")
const db= require("./index")

db.sync({force:true}).then(()=>{ 
   Provincies.bulkCreate(provinces)
})
.then(()=> console.log("seed finalizado"))
.catch((err)=> console.log("aca" ,err))
