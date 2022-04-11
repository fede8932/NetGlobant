const {
  Securities,
  WorkDay,
  BranchOficce,
  Client,
  Provincies,
} = require("../models");
const{genHash} = require("../lib/passwordUtils")


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
            date: today.date,
            wishEntryHour: today.wishEntryHour
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
          association: BranchOficce.calendar,
          where: {
            date: today.date,
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
      const date = req.params.date;
      const justDate = date.split(" ")[0];
      const allWorkDays = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
        },
      });
     const todaySecurity= allWorkDays.workDays.filter((workaday)=> workaday.date === justDate)
      const [rows, workDay] = await WorkDay.update(
        { entryHour: req.params.date, serverHourEntry: new Date() },
        {
          where: { id: todaySecurity[0].dataValues.id},
          returning: true,
        }
      );
      return workDay;
    } catch (err) {
      next(err);
    }
  }
  
  static async serviceToWriteMyWorkDayClose(req, next) {
    try {
      const date = req.params.date;
      
      const justDate = date.split(" ")[0];
     
      const allWorkDays = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
        }, 
      }); 

     const todaySecurity= allWorkDays.workDays.filter((workaday)=> workaday.date === justDate)
     
      const [rows, workDay] = await WorkDay.update(
        { closingHour: req.params.date, serverHourClosing: new Date() },
        {
          where: { id: todaySecurity[0].dataValues.id},
          returning: true,
        }
      );
      return workDay;
    } catch (err) {
      next(err);
    }
  }

 

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
     const newPassword= await genHash(req.body.password)
     console.log(newPassword)
      await Securities.update({password: newPassword.hash}, {
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
