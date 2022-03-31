const adminRouter = require("express").Router();
const AdminController = require("../controllers/AdminController");


adminRouter.get("/clients", AdminController.getAllClients);
adminRouter.get("/clients/:id", AdminController.getOneClient);
adminRouter.get("/clientsname/:name", AdminController.getOneClientName);
adminRouter.get("/securities", AdminController.getAllSecurities);
adminRouter.get("/securities/:name", AdminController.getOneSecurity);
adminRouter.get("/office", AdminController.getAllOffice);
adminRouter.get("/office/:id", AdminController.getOneOffice);
adminRouter.get("/officename/:name", AdminController.getOneOfficeName);
adminRouter.get("/securities/office/:name",AdminController.getAllSecuritiesByOffice);
adminRouter.get("/securitiesByDistance/:id", AdminController.getSecuritiesByDistance)
adminRouter.get("/calendar/office/:id", AdminController.getOfficeCalendar);
adminRouter.get("/calendar/security/:id", AdminController.getOfficeCalendarSecurity)

adminRouter.post("/add/security", AdminController.addSecurity)
adminRouter.post("/add/client", AdminController.addClient);
adminRouter.post("/add/office", AdminController.addOffice);
adminRouter.post("/add/provincie/security", AdminController.addSecurityProvincie)
adminRouter.post("/add/office/security", AdminController.addSecurityOffice);
adminRouter.post("/add/Calendar/office", AdminController.addSchedule);
adminRouter.post("/add/Calendar/security", AdminController.addScheduleSecurity);
adminRouter.post("/asing/Calendar/security", AdminController.asingScheduleToSecurity);

adminRouter.delete("/remove/security/:id", AdminController.removeSecurity);
adminRouter.delete("/remove/client/:id", AdminController.removeClient);
adminRouter.delete("/remove/office/:id", AdminController.removeOffice);
adminRouter.delete("/remove/calendar/office/:id",AdminController.removeSchedule);
adminRouter.delete("/remove/calendar/security/:id")
adminRouter.delete("/remove/office/security/:id")

adminRouter.put("/edit/office/:id", AdminController.editOffice);
adminRouter.put("/edit/security/:id", AdminController.editSecurity);
adminRouter.put("/edit/client/:id", AdminController.editClient);
adminRouter.put("/edit/calendar/office/:id")
adminRouter.put("/edit/calendar/security/:id")
adminRouter.put("/edit/office/security/:id")

adminRouter.patch("/validate/calendar")
adminRouter.patch("/validate/security")
adminRouter.patch("/validate/client")
adminRouter.patch("/validate/admins")



module.exports = adminRouter;

