import { Table } from "react-bootstrap"

const TablePermisos = function ({result}){
    const permisos = [{fecha:"22/3/2022" , empresa : "falabella" , estado:"aprobada"},
    {fecha:"23/3/2022" , empresa : "falabella" , estado:"rechazada"},
    {fecha:"24/3/2022" , empresa : "falabella" , estado:"pendiente"}]
    return (
        <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "98%", margin: "0 auto", marginTop: "2rem" }}>
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Empresa</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
                {permisos?.map((permiso , i) => (
                    <tr key={i}>
                    <td>{permiso.fecha}</td>
                    <td>{permiso.empresa}</td>
                    <td>{permiso.estado}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default TablePermisos