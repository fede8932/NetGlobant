const {
  Client,
  Securities,
  BranchOficce,
  Provincies,
  WorkDay,
} = require("../../models");
const { Op } = require("@sequelize/core");
const { getRadius } = require("../../lib/findDistance");

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
          name: name,
          lastName: lastName,
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

  static async serviceGetOneOffice(req, next) {
    try {
      const oneOffice = await BranchOficce.findByPk(req.params.id);
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
        },
      });
      return calendar;
    } catch (err) {
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
    try {
      let { maxLat, maxLon, minLat, minLon } = getRadius(y, x, 10);
      const securities = await Securities.findAll({
        where: {
          y: {
            [Op.and]: [{ [Op.lte]: maxLat }, { [Op.gte]: minLat }],
          },
          x: {
            [Op.and]: [{ [Op.lte]: maxLon }, { [Op.gte]: minLon }],
          },
        },
      });
      if (securities.length < 2) {
        let { maxLat, maxLon, minLat, minLon } = getRadius(y, x, 50);
        const securities = await Securities.findAll({
          where: {
            y: {
              [Op.and]: [{ [Op.lte]: maxLat }, { [Op.gte]: minLat }],
            },
            x: {
              [Op.and]: [{ [Op.lte]: maxLon }, { [Op.gte]: minLon }],
            },
          },
        });
      }
      if (securities.length < 2) {
        const securities = await Securities.findAll({
          include: Provincies.findOne({ where: { id: id } }),
        });
      }
      return securities;
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AdminServicesGet;
