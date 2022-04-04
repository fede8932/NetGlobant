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

static async cancellMyWorkDay(req, res, next){
    await SecuritiesServices.serviceCancellWorkDay(req, next)
    return res.sendstatus(200)
}


static async changeMyPassword(req, res, next){
    await SecuritiesServices.serviceChangeMyPassword(req, next)
    return res.sendStatus(204)
}

static async 

}

module.exports= SecurityController
