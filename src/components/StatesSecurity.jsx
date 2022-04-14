import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getAllRequests } from "../states/requests";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const StatesSecurity = () => {
  const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const obtainedRequests = await dispatch(getAllRequests());
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRequest = (id) => {
    navigate(`/states/${id}`);
    console.log("editar");
  };

  console.log("allrequests", requests);
  return (
    <>
      <h3
        style={{
          width: "50%",
          margin: "0 auto",
          marginTop: "60px",
          color: "grey",
        }}
      >
        PEDIDOS DE AUSENCIA
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
            <th>ID Vigilador</th>
            <th>Razón</th>
            <th>Comienzo</th>
            <th>Fin</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {requests?.map((req) => (
            <tr key={req.id} onClick={() => handleRequest(req.id)}>
              <td>{req.id}</td>
              <td>{req.reason}</td>
              <td>{req.initDate}</td>
              <td>{req.endDate}</td>
              <td>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StatesSecurity;
