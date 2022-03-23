const adminRouter = require("express").Router()
const AdminController= require("../AdminController")

adminRouter.get("/clients", AdminController.getAllClients)
adminRouter.get("/clients/:id", AdminController.getOneClient)
adminRouter.get("/securities", AdminController.getAllSecurities)
adminRouter.get("/securities/:id", AdminController.getOneSecurity)
adminRouter.post("/office/security/add", AdminController.addSecurity)
adminRouter.post("/add/office", AdminController.addOffice)
adminRouter.delete("/remove/office",AdminController.removeOffice)
adminRouter.put("/edit/office", )












module.exports= adminRouter
