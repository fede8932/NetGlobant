const Admin= require("./Admin")
const BranchOficce= require("./BranchOficce")
const Client= require("./Clients")
const Provincies= require("./Provincies")
const Securities= require("./Securities")
const WorkDay= require("./WorkDay")
const AbsenceRequest= require("./AbsenceRequest")


/* asocianes */
/* -un cliente tiene muchas sucursales: */
Client.offices=BranchOficce.belongsTo(Client)
/* -una sucursal le pertenece a una  provincia */
BranchOficce.belongsTo(Provincies)
/* -un vigilador esta habilitado en distintas provincias */
Securities.provincie=Securities.belongsToMany(Provincies, {through: 'provincies_security '})
/* -una sucursal tiene muchas jornadas */
BranchOficce.calendar= BranchOficce.belongsToMany(WorkDay, { through: 'calendar_office'})
/* -un vigilador tiene muchas jornadas */
Securities.calendar=Securities.belongsToMany(WorkDay, {through: 'ownTime'})
/* - a un vigilante se le asigna una sucursal */
BranchOficce.security= BranchOficce.belongsToMany(Securities, {through: 'yourSecurity'})
/* - un pedido de ausencia le pertenece a un guardia de seguridad */
AbsenceRequest.belongsTo(Securities)

 





module.exports= {Admin, BranchOficce, Client, Provincies, Securities, WorkDay , AbsenceRequest}