const { Securities, WorkDay , BranchOficce , Client , Provincies } = require("../models");

class SecuritiesServices {
  static async serviceMyWorkDay(req, next) {
    try {
      const date = req.params.date;
      const today = await WorkDay.findOne({
        where: {
          wishEntryHour: date,
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
          association: BranchOficce.calendar,
          where: {
            wishEntryHour: today.wishEntryHour, 
          },
        },
      });
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
      console.log("oficinas",oficina)
      return {office : oficina , calendario : schedule , cliente : cliente , provincia : provincia};
    } catch (err) {
      next(err);
    }
  }

  static async serviceToWriteMyWorkDay(req, next) {
    try {
      const today= await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
          where: {
            wishEntryHour: req.params.date,
          },
        },
      });
      const workDaily=today.dataValues.workDays   
       const [rows, workDay] = await WorkDay.update(req.body, {
        where: { id: workDaily[0].dataValues.id }, returning:true }); 
      console.log(workDay)
      return workDay;
    } catch (err) {
      next(err);
    }
  }

  /*  static async serviceCancellWorkDay(req, next){
        const [rows, workDay]= await WorkDay.update((req.body,{
            where:{ id: req.params.id},
        }))
        return workDay
        }catch(err){
            next(err)
        }
    } */

  static async serviceChangeMyPassword(req, next) {
    try {
      await Securities.update(req.body, {
        where: { id: req.params.id },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SecuritiesServices;
