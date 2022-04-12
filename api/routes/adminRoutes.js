const adminRouter = require("express").Router();
const AdminControllerGet = require("../controllers/adminControllers/AdminControllersGet");
const AdminControllerPost = require("../controllers/adminControllers/AdminControllersPost");
const AdminControllerDelete = require("../controllers/adminControllers/AdminControllersDelete");
const AdminControllerPut = require("../controllers/adminControllers/AdminControllersPut");
const AdminControllerPatch = require("../controllers/adminControllers/AdminControllersPatch")

// TRAE TODOS LOS CLIENTES
adminRouter.get("/clients", AdminControllerGet.getAllClients);
// TRAE UN  CLIENTE POR ID
adminRouter.get("/clients/:id",AdminControllerGet.getOneClient);
// TRAE UN CLIENTE POR NAME
adminRouter.get("/clientsname/:name", AdminControllerGet.getOneClientName);
//TRAE TODOS LOS VIGILADORES
adminRouter.get("/securities", AdminControllerGet.getAllSecurities);
// TRAE UN VIGILADOR POR ID
adminRouter.get("/securitiesById/:id",AdminControllerGet.getOneSecurityById);
// TRAE UN VIGILADOR POR NAME
adminRouter.get("/securities/:name", AdminControllerGet.getOneSecurity);
// TRAE TODAS LAS OFICINAS
adminRouter.get("/office", AdminControllerGet.getAllOffice);
// TRAE UNA OFICINA POR ID
adminRouter.get("/office/:id", AdminControllerGet.getOneOffice);
// TRAE TODAS LAS OFICINAS de un determinado cliente
adminRouter.get("/office/byclient/:clientId", AdminControllerGet.getAllOfficeByClient);
//TRAE TODAS LAS OFICINAS DE UN CLIENTE POR NOMBRE
adminRouter.get("/office/byClientName/:clientName", AdminControllerGet.getAllOfficiesByClientName);
// TRAE UNA OFICINA POR NAME
adminRouter.get("/officename/:name", AdminControllerGet.getOneOfficeName);
// TRAE UN GUARDIA POR NAME DE OFICINA
adminRouter.get("/securities/office/:name",AdminControllerGet.getAllSecuritiesByOffice);
// TRAE A LOS GUARDIAS QUE VIVEN CERCA
adminRouter.get("/securitiesByDistance/:id", AdminControllerGet.getSecuritiesByDistance)
// TRAE CALENDARIO POR OFICINA ID
adminRouter.get("/calendar/office/:id/:date/:twoce", AdminControllerGet.getOfficeCalendar);
// TRAE CALENDARIO POR VILIGANTE ID
adminRouter.get("/calendar/security/:id", AdminControllerGet.getOfficeCalendarSecurity)
// TRAE SECURITIES POR PROVINCIA
adminRouter.get("/provincie/security/office/:name", AdminControllerGet.getSecuritiesByProvincie)
// TRAE TODAS LA IMAGENES POR WORKDAY ID
adminRouter.get("/images/security/day/:id", AdminControllerGet.getImageSecurityByDay)
//TRAE A TODAS COSAS QUE ESTEN INHABILITADAS
adminRouter.get("/inhabites", AdminControllerGet.getAllInhabited)
//TRAER A TODOS LOS SECURITIES INHABILITADOS
adminRouter.get("/inhabites/securities", AdminControllerGet.getSecuritiesInhabited)
//TRAE A TODOS LOS CLIENTES INHABILITADOS
adminRouter.get("/inhabites/client", AdminControllerGet.getClientsInhabited)
//TRAE TODAS LAS OFICINAS INHABILITADAS}
adminRouter.get("/inhabites/officies", AdminControllerGet.getOfficiesInhabited)
//TRAE TODOS LOS ADMINS DESAHBILITADOS
adminRouter.get("/inhabites/admins", AdminControllerGet.getAdminsInhabited)

// AGREGA VIGILANTE
adminRouter.post("/add/security", AdminControllerPost.addSecurity)
// AGREGA CLIENTE
adminRouter.post("/add/client", AdminControllerPost.addClient);
// AGREGA OFICINA
adminRouter.post("/add/office", AdminControllerPost.addOffice);
// AGREGA PROVINCIA A VIGILANTE
adminRouter.post("/add/provincie/security", AdminControllerPost.addSecurityProvincie)
// AGREGA VIGILANTE A OFICINA 
adminRouter.post("/add/office/security", AdminControllerPost.addSecurityOffice);
// AGREGA CALENDAR A OFICINA ---> USAR ESTA RUTA PARA CREAR UNA JORNADA LABORAL
adminRouter.post("/add/Calendar/office", AdminControllerPost.addSchedule);
// AGREGA CALENDAR A VIGILANTE 
adminRouter.post("/add/Calendar/security", AdminControllerPost.addScheduleSecurity);
// ASIGNA CALENDAR A VIGILANTE
adminRouter.post("/assign/Calendar/security", AdminControllerPost.asingScheduleToSecurity);
// ASIGNA CALENDAR A OFICINA
adminRouter.post("/assign/Calendar/office", AdminControllerPost.asingScheduleToOffice);


//MODIFICA VIGILADORES ASIGNADOS este delete si quede porque remueve reslacion- no datos
adminRouter.delete("/remove/office/security/:name/:id", AdminControllerDelete.removeSecurityByOffice)
//BORRA CALENDAR DE OFICINA POR ID
adminRouter.delete("/remove/calendar/office/:id",AdminControllerDelete.removeScheduleOffice);
//BORRA  CALENDAR DE VIGILANTE POR ID
adminRouter.delete("/remove/calendar/security/:id", AdminControllerDelete.removeScheduleSecurity)

//<<<<<<---------------I N H A B I L I T A C I O N E S ---------------------->>>>>
// INHABILITA VIGILANTE POR ID
adminRouter.post("/inhabited/security/:id", AdminControllerPost.inhabitedSecurity);
//INHABILITA CLIENTE POR ID
adminRouter.post("/inhabited/client/:id", AdminControllerPost.inhabitedClient);
//INHABILITA OFICINS POR ID
adminRouter.post("/inhabited/office/:id", AdminControllerPost.inhabitedOffice);
//INHABILITA ADMINS POR ID 
adminRouter.post("/inhabited/admin/:id", AdminControllerPost.inhabitedAdmins);
// REHABILITACIONES
 adminRouter.post("/rehabited/security/:id", AdminControllerPost.inhabitedSecurity)

 adminRouter.post("/rehabited/office/:id", AdminControllerPost.inhabitedOffice)

 adminRouter.post("/rehabited/client/:id", AdminControllerPost.inhabitedClient)
 
 adminRouter.post("/rehabited/admin/:id", AdminControllerPost.inhabitedAdmins)

// EDITA OFICINA POR ID
adminRouter.put("/edit/office/:id", AdminControllerPut.editOffice);
// EDITA VIGILANTE POR ID
adminRouter.put("/edit/security/:id", AdminControllerPut.editSecurity);
// EDITA CLIENTE POR ID
adminRouter.put("/edit/client/:id", AdminControllerPut.editClient);
// EDITA CALENDAR POR ID
adminRouter.put("/edit/calendar/:id", AdminControllerPut.editCalendar);
// EDITA EL ESTADO DE UN SECURITY
adminRouter.put("/edit/securityStatus/:id", AdminControllerPut.editSecurityStatus)


//ESTADO DE CALENDARIO (DISPONIBILIDAD)
adminRouter.patch("/validate/calendar/:id", AdminControllerPatch.patchCalendar)
//ESTADO DE VIGILANTE (DISPONIBILIDAD)
adminRouter.patch("/validate/security/:id", AdminControllerPatch.patchSecurity)
//ESTADO DE CLIENTE (DISPONIBILIDAD)
adminRouter.patch("/validate/client/:id", AdminControllerPatch.patchClient)
//ESTADO DE ADMIN (DISPONIBILIDAD)
adminRouter.patch("/validate/admins/:id", AdminControllerPatch.patchAdmin)
//ESTADO DE OFICINA (DISPONIBILIDAD)
adminRouter.patch("/validate/Office/:id", AdminControllerPatch.patchOffice)
//CAMBIA LA CONTRASEÑA
adminRouter.patch("/changePassword/:id", AdminControllerPatch.patchPassword)


module.exports = adminRouter;

