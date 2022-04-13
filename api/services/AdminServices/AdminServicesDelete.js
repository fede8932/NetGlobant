const {
  Client,
  Securities,
  BranchOficce,
  WorkDay,
  Events,
} = require("../../models");

class AdminServicesDelite {
  static async serviceRemoveSchedule(req, next) {
    try {
      const workDay = await WorkDay.findOne({
        where: { date: req.params.date },
        include: { model: Events, through: { where: { id: req.body.id } } },
      });

      const event = await Events.findOne({
        where: {
          id: req.body.id,
        },
      });

      const security = await Securities.findOne({
        where: {
          CUIL: req.body.CUIL,
        },
      });
      console.log(security);
      workDay.removeSecurities(security);
      workDay.removeEvent(event);
      workDay.removeSecurity(security);
    } catch (err) {
      next(err);
    }
  }

  // si el front me puede enviar el id del dia, lo la fecha o algo entonces va a quedar un solo service para office y par security, si en cambio me pasan dato de branch o de security entonces cambia ambas logicas y se mantienen por separado

  static async serviceRemoveCalendarSecurity(req, next) {
    try {
      await WorkDay.destroy({
        where: { id: req.params.id, status: true },
      });
    } catch (err) {}
  }

  // USAR ESTA, PASARLE NAME DE OFFICE, ID GUARDIA
  static async serviceRemoveSecurityByOffice(req, next) {
    try {
      const office = await BranchOficce.findOne({
        where: {
          name: req.params.name,
        },
      });
      const security = await Securities.findOne({
        where: {
          id: req.params.id,
        },
      });
      office.removeSecurities(security);
      return office;
    } catch (err) {
      next(err);
    }
  }

  static async serviceRemoveEvent(req, next) {
    try {
      // const event = await Events.findOne({
      //   where: {
      //     id: req.params.id,
      //   },
      // });
      // const workDay = await WorkDay.findOne({
      //   where: { date: event.date },
      // });
      // const security = await Securities.findOne({
      //   where: {
      //     id: req.body.securityId,
      //   },
      // });
      //security.removeWorkDays(workDay);
      //workDay.removeEvent(event);
      await Events.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminServicesDelite;
