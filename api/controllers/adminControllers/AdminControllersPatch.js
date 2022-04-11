const AdminServicesPatch = require("../../services/AdminServices/AdminSevicesPatch");

class AdminControllerPatch {
  static async patchSecurity(req, res, next) {
    const patchSecurity = await AdminServicesPatch.serviceValidateSecurity(
      req,
      next
    );
    return patchSecurity
      ? res.status(204).json(patchSecurity)
      : res.sendStatus(404);
  }

  static async patchCalendar(req, res, next) {
    const patchCalendar = await AdminServicesPatch.serviceValidateCalendar(
      req,
      next
    );
    console.log(patchCalendar);
    return patchCalendar
      ? res.status(201).json(patchCalendar)
      : res.sendStatus(404);
  }

  static async patchClient(req, res, next) {
    const patchClient = await AdminServicesPatch.serviceValidateClient(
      req,
      next
    );
    return patchClient
      ? res.status(204).json(patchClient)
      : res.sendStatus(404);
  }

  static async patchAdmin(req, res, next) {
    const patchAdmin = await AdminServicesPatch.serviceValidateAdmin(req, next);
    return patchAdmin ? res.status(204).json(patchAdmin) : res.sendStatus(404);
  }

  static async patchOffice(req, res, next) {
    const patchOffice = await AdminServicesPatch.serviceValidateOffice(
      req,
      next
    );
    return patchOffice
      ? res.status(204).json(patchOffice)
      : res.sendStatus(404);
  }

  static async patchPassword(req, res, next) {
    const patchPassword = await AdminServicesPatch.patchPassword(req, next);
    return patchPassword
      ? res.status(204).json(patchPassword)
      : res.sendStatus(404);
  }
}
module.exports = AdminControllerPatch;
