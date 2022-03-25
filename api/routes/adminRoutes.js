const adminRouter = require("express").Router()
const AdminController= require("../AdminController")

adminRouter.get("/clients", AdminController.getAllClients)
adminRouter.get("/clients/:id", AdminController.getOneClient)
adminRouter.get("/securities", AdminController.getAllSecurities)
adminRouter.get("/securities/:id", AdminController.getOneSecurity)
adminRouter.get("/office",AdminController.getAllOffice)
adminRouter.get("/office/:id",)

adminRouter.post("/add/office/security", AdminController.addSecurity)
adminRouter.post("/add/office", AdminController.addOffice)
adminRouter.post("/add/client",)

adminRouter.delete("/remove/security/:id",)
adminRouter.delete("/remove/client/:id",)
adminRouter.delete("/remove/office/:id",AdminController.removeOffice)

adminRouter.put("/edit/office/:id", AdminController.editOffice)
adminRouter.put("/edit/security/:id",)
adminRouter.put("/edit/client/:id",)













module.exports= adminRouter
