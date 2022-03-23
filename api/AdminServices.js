const {Admin, Client, Securities, BranchOficce} = require("./models")


class AdminServices{
 static async serviceGetAllClients(next){
        try{
        const clients= await Client.findAll()
        return clients
    }catch(err){
        next(err)
    }
    }

    static async serviceGetOne(req, next){
        try{
           const oneClient=await Client.findByPk(req.pararms.id)
           return oneClient
        } catch(err){
            next(err)
        }
    }

    static async serviceGetAllSecurities(next){
        try{
            const allSecuritie= await Securities.findAll()
            return allSecuritie
        }catch(err){
          next(err)
        }
    }

    static async serviceGetOneSecurities(req, next){
        try{
           const oneSecurity=await Securities.findByPk(req.pararms.id)
           return oneSecurity
        } catch(err){
            next(err)
        }
    }

    static async serviceAddSecurity(req, next){
        try{
            const{branchOffice}=req.body
             const office= await BranchOficce.findOne({
                where:{name: branchOffice } })
            const security= await Security.findOne({
                where:{
                    CUIT: req.body.CUIT
                }  

            })
             office.setSecurity(security)
             return office
        } catch(err){
            next(err)
        }
    }
}


module.exports=AdminServices