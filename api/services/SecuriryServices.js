const {Securities, WorkDay}= require("../models")

class SecuritiesServices{

    static async serviceMyWorkDay(req, next){
        try{
     const schedule= await Securities.findOne({
         where:{ id: req.params.id},
         include:{
             model:WorkDay,
             as:'my_workday'
         }
     }) 
     return schedule
    } catch(err){
        next(err)
    }

    }

    static async serviceToWriteMyWorkDay(req, next){
        try{
            const [rows, workDay]= await WorkDay.update(req.body,{
                where:{ id: req.params.id},
            })
            return workDay
        }catch(err){
            next(err)
        }

    }

   /*  static async serviceCancellWorkDay(req, next){
        const [rows, workDay]= await WorkDay.update((req.body,{
            where:{ id: req.params.id},
        }))
        return workDay
        }catch(err){
            next(err)
        }
    } */

    static async serviceChangeMyPassword(req, next){
          try{
              await Securities.update(req.body, {
                  where:{ id: req.params.id}
              })
          }catch(err){
          next(err)
          }
    }
}


module.exports= SecuritiesServices;