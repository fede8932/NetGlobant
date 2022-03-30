const SecuritiesServices= require("../services/SecuriryServices")

class SecurityController{
 static async getMyWorkDay(req,res,next){
 const schedule= await SecuritiesServices.serviceMyWorkDay(req,next)
  return schedule? res.status(200).send(schedule) : res.sendStatus(404)
 }

 static async writeMyWorkDay(req, res, next){
     await SecuritiesServices.serviceToWriteMyWorkDay(req, next)
     return res.sendStatus(201)
 }

static async changeMyPassword(req, res, next){
    await SecuritiesServices.serviceChangeMyPassword(req, next)
    return res.sendStatus(204)
}

}

module.exports= SecurityController
