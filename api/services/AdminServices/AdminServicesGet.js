const {
  Client,
  Securities,
  BranchOficce,
  Provincies,
  WorkDay,
  Inhabited,
} = require("../../models");
/* const { Op } = require("@sequelize/core"); */
const { Op } = require("sequelize");

const { findAll } = require("../../models/Admin");
const { distance } = require("../../lib/findDistance.js");

class AdminServicesGet {
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

  static async serviceGetOneName(req, next) {
    try {
      const oneClient = await Client.findOne({
        where: { bussinessName: req.params.name },
      });
      return oneClient;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetOneSecurities(req, next) {
    const [name, lastName] = req.params.name.split(" ");
    try {
      const oneSecurity = await Securities.findAll({
        where: {
          [Op.or]: [
          {name: name},
          {name: name,lastName: lastName}
      ]
        },
      });
      return oneSecurity;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetAllSecurities(next) {
    try {
      const allSecurities = await Securities.findAll();
      return allSecurities;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetOneSecurityById(req, next) {
    try {
      const oneSecurity = await Securities.findAll({
        where: {
          id: req.params.id,
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

  static async serviceGetAllOfficeByClient(req, next) {
    try {
      const allOfficeByClient = await BranchOficce.findAll({
        where: {
          clientId: req.params.clientId,
        },
        include: {
          association: Client.offices,
        },
      });
      return allOfficeByClient;
    } catch (err) {
      console.log("error => ", err);
      next(err);
    }
  }

  static async serviceGetOneOffice(req, next) {
    try {
      const oneOffice = await BranchOficce.findByPk(req.params.id);
      const officeName = await Client.findByPk(oneOffice.clientId);
      oneOffice.dataValues.clientName = officeName.bussinessName
      return oneOffice;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetOneOfficeName(req, next) {
    try {
      const oneOffice = await BranchOficce.findOne({
        where: { name: req.params.name },
      });
      return oneOffice;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetAllSecuritiesByOffice(req, next) {
    try {
      const securityList = await BranchOficce.findAll({
        where: { name: req.params.name },
        include: {
          association: BranchOficce.security,
        },
      });

      return securityList;
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
          where: {
            date: req.params.date,
          },
        },
      });
      const securities = await BranchOficce.findAll({
        where: { id: req.params.id },
        include: {
          association: BranchOficce.security,
        },
      });
      const arrayId = securities[0].securities.map(
        (security) => security.dataValues.id
      );

      const onlyWithCalendar = await Securities.findAll({
        where: {
          id: arrayId,
        },
        include: {
          association: Securities.calendar,
          where: {
            date: req.params.date,
          },
        },
      });

      return {
        calendar: calendar.workDays,
        securities: securities[0].securities,
        onlyCalendar: onlyWithCalendar,
      }; 
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetAllSecuritiesByProvincie(req, next) {
    try {
      const provincie = await BranchOficce.findAll({
        where: {
          name: req.params.name,
        },
      });
      const provincieId = provincie[0].provincyId;
      const securities = await Securities.findAll({
        include: {
          association: Securities.provincie,
          where: {
            id: provincieId,
          },
        },
      });
      return securities;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async serviceGetCalenderSecurity(req, next) {
    try {
      const scheduleSecurity = await Securities.findOne({
        where: { id: req.params.id },
        include: {
          association: Securities.calendar,
        },
      });
      return scheduleSecurity;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetSecuritiesByDistance(req, next) {
    const { y, x } = req.body;
    const { id } = req.params;

    let orderedSecurities = [];
    let min;

    try {
      let securities = await Securities.findAll({
        include: {
          association: Securities.provincie,
          where: {
            id: id,
          },
        },
      });

      securities = securities.map((securitie) => {
        const dist = distance(y, x, securitie.y, securitie.x);
        securitie.dist = dist;
        return securitie;
      });

      while (securities[0]) {
        min = securities[0];
        securities.forEach((security) => {
          if (min.dist > security.dist) min = security;
        });
        securities = securities.filter((security) => security.id != min.id);
        orderedSecurities.push(min);
      }

      return orderedSecurities.slice(0, 12);
    } catch (error) {
      next(error);
    }
  }

  static async getImageSecurity(req, next) {
    try {
      const image = WorkDay.findAll({
        where: {
          id: req.params.id,
        },
        include: {
          attributes: ["imageSecurity"],
        },
      });
      return image;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetInhabites(req,next){
    try{
      const allInhabites= await Inhabited.findAll()
    return allInhabites
    }
    catch(err){
      next(err)
    }
  }

  static async servicesGetSecuritiesInhabited(req, next){
    try{
      const securitiesInhabited= await Inhabited.findAll({
        where:{ type: "securities"}
      })
      return securitiesInhabited
    }catch(err){
      next(err)
    }
  }

  static async servicesGetClientsInhabited(req, next){
    try{
      const clientsInhabited= await Inhabited.findAll({
        where:{ type: "clients"}
      })
      return clientsInhabited
    }catch(err){
      next(err)
    }
  }

  static async servicesGetOfficiesInhabited(req, next){
    try{
      const officiesInhabited= await Inhabited.findAll({
        where:{ type: "branchOffice"}
      })
      return officiesInhabited
    }catch(err){
      next(err)
    }
  }

  static async servicesGetAdminsInhabited(req, next){
    try{
      const adminsInhabited= await Inhabited.findAll({
        where:{ type: "admins"}
      })
      return adminsInhabited
    }catch(err){
      next(err)
    }
  }
}
module.exports = AdminServicesGet;
