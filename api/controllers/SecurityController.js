const SecuritiesServices= require("../services/SecuriryServices")

class SecurityController{
 static async getMyWorkDay(req,res,next){
 const schedule= await SecuritiesServices.serviceMyWorkDay(req,next)
  return schedule? res.status(200).send(schedule) : res.sendStatus(404)
 }


}

module.exports= SecurityController
