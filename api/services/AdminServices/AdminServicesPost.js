const {
  Client,
  Securities,
  BranchOficce,
  Provincies,
  WorkDay,
} = require("../../models");
const createWorkDay = require("../../lib/createWorkDaySecurity");
const { validateCreateWorkDay, validationZone } = require("../../lib/validationsr");

class AdminServicesPost {
  static async serviceAddSecurityOffice(req, next) {
    try {
      const { id } = req.body;

      const office = await BranchOficce.findOne({
        where: { id: id, status: true },
      });

      const security = await Securities.findOne({
        where: {
          CUIL: req.body.CUIL,
          status: true,
        },
      });
      const isEnable= await validationZone(security.id,office.id)
      if(isEnable){
      office.addSecurity(security);
      return office
    }
      
    } catch (err) {
      console.log(err);
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
          status: true,
        },
      });
      const office = await BranchOficce.create(req.body);
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

  static async serviceAsingSchedule(req, next) {
    try {
      const security = await Securities.findOne({
        where: {
          CUIL: req.body.CUIL,
          status: true,
        },
      });
      const workDay = await WorkDay.findOne({
        where: { id: req.body.id, status: true },
      });
      security.addWorkDays(workDay);
    } catch (err) {
      next(err);
    }
  }

  static async serviceAsingScheduleOffice(req, next) {
    try {
      const security = await BranchOficce.findOne({
        where: {
         id: req.body.officeId, status:true
        },
      });
      const workDay = await WorkDay.findOne({
        where: { id: req.body.id, status: true },
      });
      security.addWorkDays(workDay);
    } catch (err) {
      next(err);
    }
  }

  static async serviceAddSchedule(req, next) {
    try {
      const branchOficces = await BranchOficce.findOne({
        where: { name: req.body.branchName,status: true  } 
      });
      const workDay = await WorkDay.create(req.body);
      branchOficces.addWorkDays(workDay);
      return branchOficces;
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  static async serviceAddScheduleSecurity(req, next) {
    try {
      const haveDays = await Securities.findOne({
        where: { name: req.body.name , status: true },
        include: {
          association: Securities.calendar,
          where: {
            wishEntryHour: req.body.wishEntryHour,
          },
        },
      });
      if (!haveDays) {
        return createWorkDay(req);
      }
      const { dataValues } = haveDays.dataValues.workDays[0];
      const definition = validateCreateWorkDay(
        dataValues.wishEntryHour,
        dataValues.closingHour,
        req.body.wishEntryHour,
        req.body.wishClosingHour
      );
      console.log(definition)
      return definition ? createWorkDay(req) : definition;
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
          status: true,
        },
      });
      security.addProvincies(provincies);
      return security;
    } catch (err) {
      next(err);
    }
  }
}
module.exports = AdminServicesPost;
