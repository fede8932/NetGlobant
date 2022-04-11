const {
    Client,
    Securities,
    BranchOficce,
    WorkDay,
  
  } = require("../../models");

  
  class AdminServicesDelite{
  static async serviceRemoveSchedule(req, next) {
        try {
        await WorkDay.destroy({
            where: { id: req.params.id, status:true },
          });
        } catch (err) {
          next(err);
        }
      }

    // si el front me puede enviar el id del dia, lo la fecha o algo entonces va a quedar un solo service para office y par security, si en cambio me pasan dato de branch o de security entonces cambia ambas logicas y se mantienen por separado

      static async serviceRemoveCalendarSecurity(req, next){

        try{
           await WorkDay.destroy({
            where: { id: req.params.id, status:true },
          });
        }catch(err){
        }
      }

      static async serviceRemoveSecurityByOffice(req, next){
        try{
          const office= await BranchOficce.findOne({where:{
            name: req.params.name},
          })
          const security= await Securities.findOne({where:{
            id: req.params.id},
          })
          office.removeSecurities(security)
          return office
        }catch(err){
          next(err)
        }

      }

  }
  module.exports= AdminServicesDelite