const securityRouter = require("express").Router()
const SecurityController= require("../controllers/SecurityController")

securityRouter.get("/myWorkDay/:id", SecurityController.getMyWorkDay)



securityRouter.put("/myEffictiveWorkDay/:id", SecurityController.writeMyWorkDay )

module.exports= securityRouter