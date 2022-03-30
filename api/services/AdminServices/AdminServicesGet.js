const { Client,Securities,BranchOficce,Provincies,WorkDay} = require("../../models");

class AdminServicesGet{
    static async serviceGetAllClients(next) {
        try {
          const clients = await Client.findAll();
          return clients;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetOne(req, next) {
        try {
          const oneClient = await Client.findOne({
            where: { id: req.params.id },
          });
          return oneClient;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetAllSecurities(next) {
        try {
          const allSecuritie = await Securities.findAll();
          return allSecuritie;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetOneSecurities(req, next) {
        // esta ruta no se puede checkear hasa que este conectado con el front
        try {
          const oneSecurity = await Securities.findAll({
            where: {
              name: req.body.name,
            },
          });
          return oneSecurity;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetAllOffice(next) {
        try {
          const allOffice = await BranchOficce.findAll();
          return allOffice;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetOneOffice(req, next) {
        try {
          const oneOffice = await BranchOficce.findByPk(req.params.id);
          return oneOffice;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceGetCalenderOffice(req, next) {
        try {
          const calendar = await BranchOficce.findOne({
            where: { id: req.params.id },
            include: {
              association: BranchOficce.calendar,
            },
          });
          return calendar;
        } catch (err) {
          next(err);
        }
      }
    
 static async serviceGetCalenderSecurity(req, next) {
        try {
          const scheduleSecurity= await Securities.findOne({
            where:{ id: req.params.id},
            include:{
              association: Securities.calendar,
            }
        }) 
        return scheduleSecurity
        } catch (err) {
         
          next(err);
        }
      }

}
module.exports= AdminServicesGet