const Admin= require("./Admin")
const BranchOficce= require("./BranchOficce")
const Client= require("./Clients")
const Provincies= require("./Provincies")
const Securities= require("./Securities")
const WorkDay= require("./WorkDay")


/* asocianes */
/* -un cliente tiene muchas sucursales: */
BranchOficce.belongsTo(Client)
/* -una sucursal le pertenece a una  provincia */
BranchOficce.belongsTo(Provincies)
/* -un vigilador esta habilitado en distintas provincias */
Securities.belongsToMany(Provincies, {through: 'provincies_security '})
/* -una sucursal tiene muchas jornadas */
BranchOficce.calendar= BranchOficce.belongsToMany(WorkDay, { through: 'calendar_office'})
/* -un vigilador tiene muchas jornadas */
Securities.calendar=Securities.belongsToMany(WorkDay, {through: 'ownTime'})
/* - a un vigilante se le asigna una sucursal */
BranchOficce.belongsToMany(Securities, {through: 'yourSecurity'})






module.exports= {Admin, BranchOficce, Client, Provincies, Securities, WorkDay}