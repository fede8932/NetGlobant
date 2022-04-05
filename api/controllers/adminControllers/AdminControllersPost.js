const AdminServicesPost = require("../../services/AdminServices/AdminServicesPost");

class AdminControllerPost{
    static async addSecurity(req, res, next) {
        const office = await AdminServicesPost.serviceAddSecurity(req, next);
        return office ? res.status(200).json(office) : res.sendStatus(500);
      }
    
      static async addOffice(req, res, next) {
        const newOffice = await AdminServicesPost.serviceAddOffice(req, next);
        return res.status(201).json(newOffice);
      }
    
      static async addClient(req, res, next) {
        const newClient = await AdminServicesPost.serviceAddClient(req, next);
        return newClient ? res.status(201).json(newClient) : res.sendStatus(404);
      }
    
      static async addSchedule(req, res, next) {
        await AdminServicesPost.serviceAddSchedule(req, next);
        return res.sendStatus(201);
      }
    
      static async addScheduleSecurity(req, res, next) {
        const workDay = await AdminServicesPost.serviceAddScheduleSecurity(
          req,
          next
        );
        return workDay ? res.status(201).send(workDay) : res.sendStatus(401);
      }
    
      static async asingScheduleToSecurity(req, res, next) {
        await AdminServicesPost.serviceAsingSchedule(req, next);
        return res.sendStatus(201);
      }
    
      static async asingScheduleToOffice(req, res, next) {
        await AdminServicesPost.serviceAsingScheduleOffice(req, next);
        return res.sendStatus(201);
      }
    
      static async addSecurityOffice(req, res, next) {
        const security = await AdminServicesPost.serviceAddSecurityOffice(
          req,
          next
        );
        return security ? res.status(201).json(security) : res.sendStatus(404);
      }
    
      static async addSecurityProvincie(req, res, next) {
        await AdminServicesPost.serviceAddSecurityProvincie(req, next);
        return res.sendStatus(201);
      }
}
module.exports=AdminControllerPost 