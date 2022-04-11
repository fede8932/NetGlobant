const securityRouter = require("express").Router();
const SecurityController = require("../controllers/SecurityController");

securityRouter.get("/myWorkDay/:id/:date", SecurityController.getMyWorkDay);

securityRouter.get("/absence/:id", SecurityController.absenceStatus);

securityRouter.put("/mypassword/:id", SecurityController.changeMyPassword);

securityRouter.put("/cancelledWorkDay/:id",SecurityController.cancellMyWorkDay);

securityRouter.put("/myEffictiveWorkDay/entry/:id/:date",SecurityController.writeMyWorkDayEntry);

securityRouter.put("/myEffictiveWorkDay/close/:id/:date",SecurityController.writeMyWorkDayClose);

securityRouter.post("/photoWorkDay", SecurityController.saveImageSecurity);

securityRouter.post("/absence/:id", SecurityController.absenceRequest);

securityRouter.get("/hour/:id/:initDate/:endDate", SecurityController.hourSecurity);

module.exports = securityRouter;
