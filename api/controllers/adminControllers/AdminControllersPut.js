const AdminServicesPut = require("../../services/AdminServices/AdminServicesPut");

class AdminControllerPut {
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

  static async editCalendar(req, res, next) {
    const updateCalendar = await AdminServicesPut.serviceEditCalendar(
      req,
      next
    );
    return res.status(201).json(updateCalendar);
  }

  static async editSecurityStatus(req, res, next) {
    const updatedSecurity = await AdminServicesPut.serviceEditSecurityStatus(
      req,
      next
    );
    return res.status(201).send(updatedSecurity);
  }
}
module.exports = AdminControllerPut;
