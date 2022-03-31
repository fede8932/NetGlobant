const {
    Client,
    Securities,
    BranchOficce,
    WorkDay,
  } = require("../../models");
const { destroy } = require("../../models/Admin");
  
  class AdminServicesDelite{
    static async serviceRemoveOffice(req, next) {
        try {
          await BranchOficce.destroy({
            where: {
              id: req.params.id,
            },
          });
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceRemoveSecurity(req, next) {
        try {
          await Securities.destroy({
            where: {
              id: req.params.id,
            },
          });
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceRemoveClient(req, next) {
        try {
          await Client.destroy({
            where: {
              id: req.params.id,
            },
          });
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceRemoveSchedule(req, next) {
        try {
          const workDay= await WorkDay.findOne({
            where: { id: req.params.id },
          });
          workDay.status= false

        } catch (err) {
          next(err);
        }
      }

    // si el front me puede enviar el id del dia, lo la fecha o algo entonces va a quedar un solo service para office y par security, si en cambio me pasan dato de branch o de security entonces cambia ambas logicas y se mantienen por separado

      static async serviceRemoveCalendarSecurity(req, next){

        try{
          const workDay= await WorkDay.findOne({
            where: { id: req.params.id },
          });
          workDay.status= false
        }catch(err){
        }
      }

      static async serviceRemoveSecurityByOffice(req, next){
        try{
          const office= await BranchOficce.findOne({where:{
            name: req.params.name},
          include:{
            association:BranchOficce.security,
            where:{id: req.params.id}
          }
          })
          console.log(office.dataValues.securities)
          return office
        }catch(err){
          next(err)
        }

      }

  }
  module.exports= AdminServicesDelite