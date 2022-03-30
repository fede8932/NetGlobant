const securityRouter = require("express").Router()
const SecurityController= require("../controllers/SecurityController")

securityRouter.get("/myWorkDay/:id/:date", SecurityController.getMyWorkDay)

securityRouter.patch("/mypassword/:id", SecurityController.changeMyPassword)

securityRouter.patch("/myEffictiveWorkDay/:id/:date", SecurityController.writeMyWorkDay )


//
module.exports= securityRouter