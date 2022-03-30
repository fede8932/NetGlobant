import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteClient } from "../states/singleClient";
import swal from "sweetalert";

const CardClient = () => {
  const cliente = {
    id: "2",
    bussinessName: "Fravega",
    CUIT: "654562952",
    legalAddress: "Panamericana 3000",
  };

  // const id = useParams();
  // useEffect(() => {
  // }, [cliente])

  const dispatch = useDispatch();
  const client = useSelector((state) => state.client);

  const handleDelete = () => {
    dispatch(deleteClient(client.id));
    swal({
      title: "El cliente fue removido",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    navigate("/clients");
  };

  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <Card style={{ width: "50rem", height: "20rem", margin: "0 auto" , marginTop:"80px"}}>
        <Card.Body>
          <Card.Title style={{ fontSize: "20px" }}>
            {cliente.bussinessName}
          </Card.Title>
          <Card.Subtitle className="mb-2 mt-5 text-muted">
            CUIT: {cliente.CUIT}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Dirección Legal: {cliente.legalAddress}
          </Card.Subtitle>

          <Card.Text className="mb-2 mt-5">
            Inicio de contrato: 12/12/2012
          </Card.Text>
          <Card.Text>Fin de contrato: 12/12/2024</Card.Text>

          <Card.Text>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={() => navigate("/clients")}
            >
              Cerrar
            </Button>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={() => handleClick(`/edit/client/${cliente.id}`)}
            >
              Editar
            </Button>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={handleDelete}
            >
              Eliminar
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardClient;
