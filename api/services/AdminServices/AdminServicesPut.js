const {
  Client,
  Securities,
  BranchOficce,
  WorkDay,
  AbsenceRequest,
  Events
} = require("../../models");

class AdminServicesPut {
  static async serviceEditOffice(req, next) {
    try {
      const [rows, update] = await BranchOficce.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return update;
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditSecurity(req, next) {
    try {
      const [rows, security] = await Securities.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return security;
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditClient(req, next) {
    try {
      console.log("req.body", req.body);

      const [rows, update] = await Client.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return update;
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditCalendarOffice(req, next) {
    try {
      const [rows, newSchedule] = await WorkDay.update(req.body, {
        where: { id: req.body.id },
        returning: true,
        plain: true,
      });
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditCalendar(req, next) {
    try {
      const [rows, newSchedule] = await WorkDay.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditSecurityStatus(req, next) {
    const { status } = req.body;
    const { id } = req.params;
    try {
      const [rows, security] = await Securities.update(
        { status: status },
        { where: { id: id } }
      );
      return security;
    } catch (error) {
      next(error);
    }
  }

  static async serviceResponseRequest(req, next) {
    try {
      const request = await AbsenceRequest.findOne({
        where: { id: req.params.id },
      });
      const [row, response] = await AbsenceRequest.update(
        { status: req.body.status },
        {
          where: { id: request.id },
          returning: true,
          plain: true,
        }
      );
      return response;
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditEvent(req, next) {
    try {
      const [row, event] = await Events.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      return event;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminServicesPut;
