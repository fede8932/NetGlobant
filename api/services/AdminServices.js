const { Client, Securities, BranchOficce, Provincies, WorkDay } = require("../models");

class AdminServices {
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
      const oneClient = await Client.findByPk(req.pararms.id);
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
    try {
      const oneSecurity = await Securities.findAll(
        {where:{
          name: req.pararms.name}});
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
      const oneOffice = await BranchOficce.findByPk(req.pararms.id);
      return oneOffice;

    } catch (err) {
      next(err);
    }
  }

  static async serviceGetCalenderOffice(req, next){
    try{
        const calendar= await BranchOficce.findOne({
            where:{ id: req.params.id},
            include:{
                model:WorkDay,
                as:'my_workday'
            }
        }) 
        return calendar
       } catch(err){
           next(err)
       }
  }

  static async serviceAddSecurity(req, next) {
    try {
      
      const { branchOffice } = req.body;
    
      const office = await BranchOficce.findOne({
        where: { name: branchOffice },
      });
     
      const security = await Securities.findOne({
        where: {
          CUIL: req.body.CUIL,
        },
      });
      
      office.addSecurity(security);
      return office;
    } catch (err) {
      next(err);
    }
  }

  static async serviceAddOffice(req, next) {
    try {
      const provincie = req.body.provincie;
      
      const { owner } = req.body;
      const provincieLocal = await Provincies.findOne({
        where: { name: provincie },
      });
      const client = await Client.findOne({
        where: {
          bussinessName: owner,
        },
      });
      console.log(client)
      const office = await BranchOficce.create(req.body)
      office.setClient(client);
      office.setProvincy(provincieLocal);
      return office;
    } catch (err) {
      next(err);
    }
  }

  static async serviceAddClient(req, next) {
    try {
      const client = await Client.create(req.body);
      return client;
    } catch (err) {
      next(err);
    }
  }

 static async serviceAddSchedule(req, next){
   try{
    const office= await BranchOficce.findOne({
      where:{ name: req.body.branchName},
  }) 
  const  workDay= await WorkDay.create(req.body)
  
  office.addWorkDay(workDay)
  return office
   }catch(err){
    next(err)
   }
 }

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

  static async serviceRemoveSchedule(req, next){
    try{
      const office= await BranchOficce.findOne({
        where:{ name: req.params.name},
        })
        const schedule= await WorkDay.findOne({
          where:{ id: req.params.id},
          })
        office.removeSchedule(schedule)    
    }catch(err){
           next(err)
    }
  }

  static async serviceEditOffice(req, next) {
    try {
      const [rows, update] = await BranchOficce.update(req.body, {
        where: {
          id: req.body.id,
        },
        returning: true,
      });
      return update;
    } catch (err) {
      next(err);
    }
  }
  
  static async serviceEditSecurity(req, next) {
    try {
      const [rows, update] = await Securities.update(req.body, {
        where: {
          id: req.body.id,
        },
        returning: true,
      });
      return update;
    } catch (err) {
      next(err);
    }
  }

  static async serviceEditClient(req, next) {
    try {
      const [rows, update] = await Client.update(req.body, {
        where: {
          id: req.body.id,
        },
        returning: true,
      });
      return update;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminServices;
