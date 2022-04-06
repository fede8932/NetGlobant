const securityRouter = require("express").Router()
const SecurityController= require("../controllers/SecurityController")

securityRouter.get("/myWorkDay/:id/:date", SecurityController.getMyWorkDay)

securityRouter.patch("/mypassword/:id", SecurityController.changeMyPassword)

securityRouter.put("/cancelledWorkDay/:id", SecurityController.cancellMyWorkDay)

securityRouter.put("/myEffictiveWorkDay/:id/:date", SecurityController.writeMyWorkDay )

securityRouter.post("/photoWorkDay", SecurityController.saveImageSecurity)



module.exports= securityRouter