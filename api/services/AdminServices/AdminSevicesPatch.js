const{WorkDay,Securities,BranchOficce,Client, Admin}= require("../../models")
const {enableOrDisable}= require("../../lib/validationsr")

class AdminServicesPatch{

    static async serviceValidateSecurity(req, next){
        try{
        const security= await Securities.findOne({
            where:{ id: req.params.id}
        })
        enableOrDisable(security)
        return security
    }catch(err){
        next(err)
    }
    }

    static async serviceValidateCalendar(req, next){
        try{
            const calendar= await WorkDay.findOne({
                where:{ id: req.params.id}
            })
           const newStatus= await enableOrDisable(calendar)
            return newStatus
        }catch(err){
            console.log(err)
            next(err)
        }
    }

    static async serviceValidateClient(req, next){
        try{
            const client= await Client.findOne({
                where:{ id: req.params.id}
            })
            enableOrDisable(client)
            return client
        }catch(err){
            next(err)
        }
    }

    static async serviceValidateOffice(req, next){
        try{
            const office= await BranchOficce.findOne({
                where:{ id: req.params.id}
            })
            enableOrDisable(office)
            return office
        }catch(err){
            next(err)
        }
    }

    static async serviceValidateAdmin(req, next){
        try{
            const admin= await Admin.findOne({
                where:{ id: req.params.id}
            })
            enableOrDisable(admin)
            return admin
        }catch(err){
            next(err)
        }
    }

}
module.exports= AdminServicesPatch
