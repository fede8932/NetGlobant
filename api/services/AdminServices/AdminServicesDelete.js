const {
    Client,
    Securities,
    BranchOficce,
    WorkDay,
  } = require("../../models");
  
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
          await WorkDay.destroy({
            where: { id: req.params.id },
          });
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceRemoveCalendarSecurity(req, next){
        try{
          

        }catch(err){

        }

      }

  }
  module.exports= AdminServicesDelite