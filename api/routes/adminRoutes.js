const adminRouter = require("express").Router();
const AdminController = require("../controllers/AdminController");


adminRouter.get("/clients", AdminController.getAllClients);
adminRouter.get("/clients/:name", AdminController.getOneClient);
adminRouter.get("/securities", AdminController.getAllSecurities);
adminRouter.get("/securitiesById/:id", AdminController.getOneSecurityById);
adminRouter.get("/securities/:name", AdminController.getOneSecurity);
adminRouter.get("/office", AdminController.getAllOffice);
adminRouter.get("/office/:id", AdminController.getOneOffice);
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
adminRouter.post("/assign/Calendar/security", AdminController.asingScheduleToSecurity);

adminRouter.delete("/remove/security/:id", AdminController.removeSecurity);
adminRouter.delete("/remove/client/:id", AdminController.removeClient);
adminRouter.delete("/remove/office/:id", AdminController.removeOffice);
adminRouter.delete("/remove/calendar/office/:id",AdminController.removeScheduleOffice);
adminRouter.delete("/remove/calendar/security/:id", AdminController.removeScheduleSecurity)
adminRouter.delete("/remove/office/security/:name/:id", AdminController.removeSecurityByOffice)

adminRouter.put("/edit/office/:id", AdminController.editOffice);
adminRouter.put("/edit/security/:id", AdminController.editSecurity);
adminRouter.put("/edit/client/:id", AdminController.editClient);
adminRouter.put("/edit/calendar/:id", AdminController.editCalendar);


adminRouter.patch("/validate/calendar", AdminController.patchCalendar)
adminRouter.patch("/validate/security", AdminController.patchSecurity)
adminRouter.patch("/validate/client", AdminController.patchClient)
adminRouter.patch("/validate/admins", AdminController.patchAdmin)
adminRouter.patch("/validate/Office", AdminController.patchOffice)


module.exports = adminRouter;

