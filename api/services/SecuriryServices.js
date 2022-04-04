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
          wishEntryHour: req.params.date,
        }
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
     
      return {
        office: oficina,
        calendario: schedule,
        cliente: cliente,
        provincia: provincia,
      };
    } catch (err) {
      next(err);
    }
  }

  static async serviceToWriteMyWorkDay(req, next) {
    try {
      const today = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
          where: {
            wishEntryHour: req.params.date,
          },
        },
      });
      const workDaily = today.dataValues.workDays;
      const { horarioDeFichadaIngreso, horarioDeFichadaEgreso } = req.body;
      const securityIn = horarioDeFichadaIngreso
        ? { entryHour: horarioDeFichadaIngreso, serverHourEntry: new Date() }
        : {
            closingHour: horarioDeFichadaEgreso,
            serverHourClosing: new Date(),
          };

      const [rows, workDay] = await WorkDay.update(securityIn, {
        where: { id: workDaily[0].dataValues.id },
        returning: true,
      });

      return workDay;
    } catch (err) {
      next(err);
    }
  }

    static async serviceCancellWorkDay(req, next){
      try{
        const [rows, workDay]= await WorkDay.update((req.body,{
            where:{ id: req.params.id},
        }))
        workDay.status= false
        workDay.save()
        return workDay
        }catch(err){
            next(err)
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

  static async serviceSavePhoto(req, next){
    try{
    const workDayUrl= WorkDay.update({imageSecurity: req.body.image},
      { where:{
     id:  req.body.id
      }})
      return workDayUrl
  } catch(err){
     next(err)
  }
}
}

module.exports = SecuritiesServices;
