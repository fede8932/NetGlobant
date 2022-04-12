import React from "react";
import { Table } from "react-bootstrap";

const StatesSecurity = () => {
  return (
    <>
      <h3 style={{ width: "50%", margin: "0 auto", marginTop: "60px" }}>
        Estados Pedidos de Ausencia
      </h3>

      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "50%", margin: "0 auto", marginTop: "60px" }}
      >
        <thead>
          <tr>
            <th>Vigilador</th>
            <th>Sucursal</th>
            <th>Dia</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {/* {branches?.map((branch, id) => (
            <tr key={branch.id} onClick={() => handleBranch(branch.id)}>
              <td>{branch.id}</td>
              <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.city}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </>
  );
};

export default StatesSecurity;
