const Admin= require("./Admin")
const BranchOficce= require("./BranchOficce")
const Client= require("./Clients")
const Provincies= require("./Provincies")
const Securities= require("./Securities")
const WorkDay= require("./WorkDay")


/* asocianes */
/* -un cliente tiene muchas sucursales: */
Client.hasMany(BranchOficce)
/* -una sucursal tiene muchas provincias */
BranchOficce.belongsTo(Provincies, {through: 'provincies_Oficce '})
/* -un vigilador esta habilitado en distintas provincias */
Securities.belongsToMany(Provincies, {through: 'provincies_security '})
/* -una sucursal tiene muchas jornadas */
BranchOficce.belongsToMany(WorkDay, {through: 'ownTime'})
/* -un vigilador tiene muchas jornadas */
Securities.belongsToMany(WorkDay, { as:'my_workday', through: 'ownTime'})
/* - a un vigilante se le asigna una sucursal */
Securities.belongsTo(BranchOficce, {through: 'yourSecurity'})






module.exports= {Admin, BranchOficce, Client, Provincies, Securities, WorkDay}