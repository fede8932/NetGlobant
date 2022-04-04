import { Table } from "react-bootstrap"

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
                    <td>{registro.fecha}</td>
                    <td>{registro.cliente}</td>
                    <td>{registro.sucursal}</td>
                    <td>{registro.horas}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default TableSecurity