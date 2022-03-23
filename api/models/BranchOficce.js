const S = require("sequelize")
const db = require("../db")

class BranchOficce extends S.Model{}

BranchOficce.init({
    name:{
        type: S.STRING
    },
    address:{
      type: S.STRING
    },
    city:{
        type: S.STRING
    },
    addressX:{
        type: S.FLOAT
    },
    addressY:{
        type: S.FLOAT
    }
},{
    sequelize: db, modelName: "branchOficce"
})

module.exports= BranchOficce