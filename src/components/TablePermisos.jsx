import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { orderTime } from "../geoCalculator"

const TablePermisos = function (){
    const permisos = useSelector(state=>state.securityApp)
    return (
        <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "98%", margin: "0 auto", marginTop: "2rem" }}>
            <thead>
            <tr>
                <th>Inicio de licencia</th>
                <th>Fin de licencia</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
                {permisos.data?.map((permiso , i) => (
                    <tr key={i}>
                    <td>{orderTime(permiso.initDate , 0)}</td>
                    <td>{orderTime(permiso.endDate , 0)}</td>
                    <td>{permiso.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default TablePermisos