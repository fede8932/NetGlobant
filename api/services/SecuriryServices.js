const {
  Securities,
  WorkDay,
  BranchOficce,
  Client,
  Provincies,
} = require("../models");

class SecuritiesServices {
  static async serviceMyWorkDay(req, next) {
    try {
      const today = await WorkDay.findOne({
        where: {
          date: req.params.date,
        },
        include: {
          association: BranchOficce.calendar,
        },
      });
      const schedule = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
          where: {
            wishEntryHour: today.wishEntryHour,
          },
        },
      });

      const oficina = await BranchOficce.findOne({
        include: {
          association: BranchOficce.security,
          where: {
            id: schedule.id,
          },
        },
      });

      const oficinaSchedule = await BranchOficce.findOne({
        where: { id: oficina.id },
        include: {
          association: BranchOficce.security,
          where: {
            id: schedule.id,
          },
        },
      });

      console.log("OFICNA", oficina);

      const cliente = await Client.findOne({
        where: {
          id: oficina.clientId,
        },
      });

      const provincia = await Provincies.findOne({
        where: {
          id: oficina.provincyId,
        },
      });

      return {
        office: oficinaSchedule,
        calendario: schedule,
        cliente: cliente,
        provincia: provincia,
      };
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceToWriteMyWorkDayEntry(req, next) {
    try {
      console.log(req.params.date);
      const date = req.params.date;
      console.log("DATE", date);
      const justDate = date.split(" ")[0];
      console.log("JUSTDATE", justDate);
      console.log(req.params);
      const today = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,

          where: {
            workDay: {
              date: justDate,
            },
          },
        },
      });

      console.log("TODAY", today);
      /* const { horarioDeFichadaIngreso, horarioDeFichadaEgreso } = req.body; */

      const [rows, workDay] = await WorkDay.update(
        { entryHour: req.params.date, serverHourEntry: new Date() },
        {
          where: { id: workDaily[0].id },

          returning: true,
        }
      );
      console.log(workDay);
      return workDay;
    } catch (err) {
      next(err);
    }
  }
  
  static async serviceToWriteMyWorkDayClose(req, next) {}

  static async serviceCancellWorkDay(req, next) {
    try {
      const [rows, workDay] = await WorkDay.update(
        (req.body,
        {
          where: { id: req.params.id },
        })
      );
      workDay.status = false;
      workDay.save();
      return workDay;
    } catch (err) {
      next(err);
    }
  }

  static async serviceChangeMyPassword(req, next) {
    try {
      await Securities.update(req.body, {
        where: { id: req.params.id },
      });
    } catch (err) {
      next(err);
    }
  }

  static async serviceSavePhoto(req, next) {
    try {
      const workDayUrl = WorkDay.update(
        { imageSecurity: req.body.image },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      return workDayUrl;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SecuritiesServices;
