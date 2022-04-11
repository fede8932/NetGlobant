import { Table } from "react-bootstrap"
import { orderTime } from "../geoCalculator"

const TableSecurity = function ({result}){
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
                <th>Sucursal</th>
                <th>Horas</th>
            </tr>
            </thead>
            <tbody>
                {result?.map((registro , i) => (
                    <tr key={i}>
                    <td style={{ minWidth:'3.8rem' , fontSize:'0.8rem' }}>{orderTime(registro.fecha , 2)}</td>
                    <td style={{ fontSize:'0.8rem' }}>{"nombre cliente"}</td>
                    <td style={{ fontSize:'0.8rem' }}>{"nombre sucursal"}</td>
                    <td style={{ fontSize:'0.8rem' }}>{registro.horas}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default TableSecurity