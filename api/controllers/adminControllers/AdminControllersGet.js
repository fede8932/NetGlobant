const AdminServicesGet = require("../../services/AdminServices/AdminServicesGet");
const { distance } = require("../../lib/findDistance");

class AdminControllerGet {
  static async getAllClients(req, res, next) {
    const clients = await AdminServicesGet.serviceGetAllClients(next);
    return clients ? res.status(200).json(clients) : res.sendStatus(404);
  }

  static async getOneClient(req, res, next) {
    const oneClient = await AdminServicesGet.serviceGetOne(req, next);
    return oneClient ? res.status(200).json(oneClient) : res.sendStatus(404);
  }

  static async getImageSecurityByDay(req, res, next) {
    const imagen = await AdminServicesGet.getImageSecurityByDay(req, next);
    return imagen ? res.status(200).send(imagen) : res.sendStatus(404);
  }

  static async getOneClientName(req, res, next) {
    const oneClient = await AdminServicesGet.serviceGetOneName(req, next);
    return oneClient ? res.status(200).json(oneClient) : res.sendStatus(404);
  }

  static async getAllSecurities(req, res, next) {
    const allSecurities = await AdminServicesGet.serviceGetAllSecurities(next);
    return allSecurities
      ? res.status(200).json(allSecurities)
      : res.sendStatus(404);
  }

  static async getOneSecurity(req, res, next) {
    const oneSecurity = await AdminServicesGet.serviceGetOneSecurities(
      req,
      next
    );
    return oneSecurity
      ? res.status(200).json(oneSecurity)
      : res.sendStatus(404);
  }

  static async getOneSecurityById(req, res, next) {
    const oneSecurityById = await AdminServicesGet.serviceGetOneSecurityById(
      req,
      next
    );
    return oneSecurityById
      ? res.status(200).json(oneSecurityById)
      : res.sendStatus(404);
  }

  static async getAllOffice(req, res, next) {
    const allOfficies = await AdminServicesGet.serviceGetAllOffice(next);
    return allOfficies
      ? res.status(200).json(allOfficies)
      : res.sendStatus(404);
  }

  static async getAllOfficeByClient(req, res, next) {
    const allOfficiesByClient =
      await AdminServicesGet.serviceGetAllOfficeByClient(req, next);
    return allOfficiesByClient
      ? res.status(200).json(allOfficiesByClient)
      : res.sendStatus(404);
  }

  static async getAllOfficiesByClientName(req, res, next) {
    const allOfficiesByClientName =
      await AdminServicesGet.serviceGetAllOfficiesByClientName(req, next);
    return allOfficiesByClientName
      ? res.status(200).json(allOfficiesByClientName)
      : res.sendStatus(404);
  }

  static async getOneOffice(req, res, next) {
    const oneOffice = await AdminServicesGet.serviceGetOneOffice(req, next);
    return oneOffice ? res.status(200).json(oneOffice) : res.sendStatus(404);
  }

  static async getOneOfficeName(req, res, next) {
    const oneOffice = await AdminServicesGet.serviceGetOneOfficeName(req, next);
    return oneOffice ? res.status(200).json(oneOffice) : res.sendStatus(404);
  }

  static async getAllSecuritiesByOffice(req, res, next) {
    const securityList = await AdminServicesGet.serviceGetAllSecuritiesByOffice(
      req,
      next
    );
    return securityList
      ? res.status(200).json(securityList)
      : res.sendStatus(404);
  }

  static async getOfficeCalendar(req, res, next) {
    const officeCalendar = await AdminServicesGet.serviceGetCalenderOffice(
      req,
      next
    );
    return officeCalendar
      ? res.status(200).json(officeCalendar)
      : res.sendStatus(404);
  }

  static async getOfficeCalendarSecurity(req, res, next) {
    const securityCalendar = await AdminServicesGet.serviceGetCalenderSecurity(
      req,
      next
    );
    return securityCalendar
      ? res.status(200).json(securityCalendar)
      : res.sendStatus(404);
  }

  static async getSecuritiesByProvincie(req, res, next) {
    const securities =
      await AdminServicesGet.serviceGetAllSecuritiesByProvincie(req, next);
    return securities ? res.status(200).send(securities) : res.sendStatus(404);
  }

  static async getSecuritiesByDistance(req, res, next) {
    const securities = await AdminServicesGet.serviceGetSecuritiesByDistance(
      req,
      next
    );
    console.log(securities);
    return res.send(securities);
  }


  static async getAllInhabited(req,res,next){
    const inhabited= await AdminServicesGet.serviceGetInhabites(req, next)
    return inhabited? res.status(200).send(inhabited) : res.sendStatus(500)
  }

  static async getSecuritiesInhabited(req, res, next){
    const securitiesInhabited= await AdminServicesGet.servicesGetSecuritiesInhabited(req, next)
    return securitiesInhabited? res.status(200).send(securitiesInhabited): res.sendStatus(500)
  }

  static async getClientsInhabited(req, res, next){
    const clientsInhabited= await AdminServicesGet.servicesGetClientsInhabited(req, next)
    return clientsInhabited? res.status(200).send(clientsInhabited): res.sendStatus(500)
  }

  static async getOfficiesInhabited(req, res, next){
    const offciesInhabited= await AdminServicesGet.servicesGetOfficiesInhabited(req, next)
    return offciesInhabited? res.status(200).send(offciesInhabited): res.sendStatus(500)
  }

  static async getAdminsInhabited(req, res, next){
    const adminsInhabited= await AdminServicesGet.servicesGetAdminsInhabited(req, next)
    return adminsInhabited? res.status(200).send(adminsInhabited): res.sendStatus(500)
  }
  static async getAllEvents(req, res, next) {
    const events = await AdminServicesGet.serviceGetAllEvents(next);
    return events ? res.status(200).json(events) : res.sendStatus(404);

  }
}

module.exports = AdminControllerGet;
