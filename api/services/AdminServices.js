const { Client, Securities, BranchOficce, Provincies} = require("./models")


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
            const security= await Securities.findOne({
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
    static async serviceaddOffice(req, next) {
        try {
          const provincie = req.body.provincie;
          const provincieLocal = await Provincies.findOne({
            where: { name: provincie },
          });
          const office = await BranchOficce.create(req.body);
          office.setProvicieLocal(provincieLocal);
          return office;
        } catch (err) {
          next(err);
        }
      }
      static async serviceRemoveOffice(req, next) {
         try{
             await BranchOficce.destroy({
               where:{
                  id: req.params.id
               }
            })
         }catch(err){
            next(err)
         }
      }
    
      static async serviceEditOffice(req, next){
    try{
       const [rows, update]= await BranchOficce.update(req.body,{
          where:{
             id: req.body.id
          }, returning:true
       })
       return update
    }catch(err){
       next(err)
    }
    
    
      }
}


module.exports=AdminServices