const AdminServicesGet = require("../services/AdminServices/AdminServicesGet");
const AdminServicesPost = require("../services/AdminServices/AdminServicesPost");
const AdminServicesDelite = require("../services/AdminServices/AdminServicesDelete");
const AdminServicesPut = require("../services/AdminServices/AdminServicesPut");
const { distance } = require("../lib/findDistance");

class AdminController {
  static async getAllClients(req, res, next) {
    const clients = await AdminServicesGet.serviceGetAllClients(next);
    return clients ? res.status(200).json(clients) : res.sendStatus(404);
  }

  static async getOneClient(req, res, next) {
    const oneClient = await AdminServicesGet.serviceGetOne(req, next);
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

  static async getAllOffice(req, res, next) {
    const allOfficies = await AdminServicesGet.serviceGetAllOffice(next);
    return allOfficies
      ? res.status(200).json(allOfficies)
      : res.sendStatus(404);
  }

  static async getOneOffice(req, res, next) {
    const oneOffice = await AdminServicesGet.serviceGetOneOffice(req, next);
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

  static async addSecurity(req, res, next) {
    const office = await AdminServicesPost.serviceAddSecurity(req, next);
    return office ? res.status(200).json(office) : res.sendStatus(500);
  }

  static async addOffice(req, res, next) {
    const newOffice = await AdminServicesPost.serviceAddOffice(req, next);
    return res.status(201).json(newOffice);
  }

  static async addClient(req, res, next) {
    const newClient = await AdminServicesPost.serviceAddClient(req, next);
    return newClient ? res.status(201).json(newClient) : res.sendStatus(404);
  }

  static async addSchedule(req, res, next) {
    await AdminServicesPost.serviceAddSchedule(req, next);
    return res.sendStatus(201);
  }

  static async addScheduleSecurity(req, res, next) {
    await AdminServicesPost.serviceAddScheduleSecurity(req, next);
    return res.sendStatus(201);
  }

  static async asingScheduleToSecurity(req, res, next) {
    await AdminServicesPost.serviceAsingSchedule(req, next);
    return res.sendStatus(201);
  }

  static async addSecurityOffice(req, res, next) {
    const security = await AdminServicesPost.serviceAddSecurityOffice(
      req,
      next
    );
    return security ? res.status(201).json(security) : res.sendStatus(500);
  }

  static async addSecurityProvincie(req, res, next) {
    await AdminServicesPost.serviceAddSecurityProvincie(req, next);
    return res.sendStatus(201);
  }

  static async removeOffice(req, res, next) {
    await AdminServicesDelite.serviceRemoveOffice(req, next);
    return res.sendStatus(202);
  }

  static async removeSecurity(req, res, next) {
    await AdminServicesDelite.serviceRemoveSecurity(req, next);
    return res.sendStatus(202);
  }

  static async removeClient(req, res, next) {
    await AdminServicesDelite.serviceRemoveClient(req, next);
    return res.sendStatus(202);
  }

  static async removeSchedule(req, res, next) {
    await AdminServicesDelite.serviceRemoveSchedule(req, next);
    return res.sendStatus(202);
  }

  static async editOffice(req, res, next) {
    const updatedOffice = await AdminServicesPut.serviceEditOffice(req, next);
    return res.status(201).json(updatedOffice);
  }

  static async editSecurity(req, res, next) {
    const updatedSecurity = await AdminServicesPut.serviceEditSecurity(
      req,
      next
    );
    return res.status(201).json(updatedSecurity);
  }

  static async editClient(req, res, next) {
    const updatedClient = await AdminServicesPut.serviceEditClient(req, next);
    return res.status(201).json(updatedClient);
  }

  static async getSecuritiesByDistance(req, res, next) {
    const { y, x } = req.body;
    const securities = await AdminServicesGet.serviceGetSecuritiesByDistance(
      req,
      next
    );
    securities.map((securitie) => {
      const dist = distance(y, x, securitie.y, securitie.x);
      return (securitie.dist = dist);
    });
    return res.send(securities);
  }
}

module.exports = AdminController;
