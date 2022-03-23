const AdminServices= require("./AdminServices")


class AdminController{
   static async getAllClients(req, res, next){
    const clients= await AdminServices.serviceGetAllClients(next)
  return clients? res.status(200).json(clients): res.sendStatus(404)
    }



    static async getOneClient(req, res, next){
        const oneClient= await AdminServices.serviceGetOne(req, next)
      return  oneClient? res.status(200).json(oneClient): res.sendStatus(404)
    }


    static async getAllSecurities(req, res, next){
        const allSecurities= await AdminServices.serviceGetAllSecurities(next)
      return  allSecurities? res.status(200).json(allSecurities): res.sendStatus(404)

    }

    static async getOneSecurity(req, res, next){
        const oneSecurity= await AdminServices.serviceGetOneSecurities(req, next)
      return  oneSecurity? res.status(200).json(oneSecurity): res.sendStatus(404)
    }

    static async addSecurity(req,next){
        const office= await AdminServices.serviceAddSecurity(req, next)
        return office? res.status(200).json(office): res.sendStatus(500)
    }
}

module.exports= AdminController