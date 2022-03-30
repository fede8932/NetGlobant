const {
    Client,
    Securities,
    BranchOficce,
    Provincies,
    WorkDay,
  } = require("../../models");


  class AdminServicesPost{
    static async serviceAddSecurityOffice(req, next) {
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
          const office = await BranchOficce.create(req.body);
          console.log(office)
          office.setClient(client);
          office.setProvincy(provincieLocal);
          return office;
        } catch (err) {
          console.log("ERROR", err)
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
    
     static async serviceAsingSchedule(req,next){
       try{
         const security= await Securities.findOne({
           where:{
             CUIL: req.body.CUIL }
         })
         const workDay= await WorkDay.findOne({
           where:{id: req.body.id}
         })
         security.addWorkDays(workDay)
       }catch(err){
         next(err)
       }
     }
    
    
      static async serviceAddSchedule(req, next) {
        try {
          const branchOficces = await BranchOficce.findOne({
            where: { name: req.body.branchName },
          });
          const workDay = await WorkDay.create(req.body);
    
          branchOficces.addWorkDays(workDay);
          return branchOficces;
        } catch (err) {
          
          next(err);
        }
      }
    
      static async serviceAddScheduleSecurity(req, next) {
        try {
          const security = await Securities.findOne({
            where: { name: req.body.name},
          });
          const workDay= await WorkDay.create(req.body);
          
          security.addWorkDays(workDay);
          return security;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceAddSecurity(req, next) {
        try {
          const provincies = await Provincies.findOne({
            where: {
              name: req.body.provincie,
            },
          });
          const security = await Securities.create(req.body);
          security.addProvincies(provincies);
          return security;
        } catch (err) {
          next(err);
        }
      }
    
      static async serviceAddSecurityProvincie(req, next) {
        try {
          const { provincie } = req.body;
          const provincies = await Provincies.findOne({
            where: { name: provincie },
          });
          const security = await Securities.findOne({
            where: {
              name: req.body.name,
            },
          });
          security.addProvincies(provincies);
          return security;
        } catch (err) {
          next(err);
        }
      }
    
  }
  module.exports= AdminServicesPost