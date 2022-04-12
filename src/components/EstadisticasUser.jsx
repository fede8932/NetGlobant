import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { Accordion, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
/* import axios from "axios"; */
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import TableSecurity from "./TableSecurity";
import TablePermisos from "./TablePermisos";
import { getPermisos } from "../states/securityApp";
import { useDispatch } from "react-redux";
import axios from "axios";

const EstadisticasUser = () => {
  const usuario = useSelector((state) => state.usuario);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPermisos(usuario.id))
  },[])
  const [registros, setRegistros] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const consultar = async (e) => {
    const result = await axios({
      method: "GET",
      url :`/api/security/hour/1/${e.desde}/${e.hasta}`
    })
    setRegistros(result.data);
  };

  return (
    <div className="estadisticasContainer">
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <h1 style={{ marginLeft: "1.2rem" }}>Estadísticas</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <Accordion.Header>Seguimiento de horas trabajadas</Accordion.Header>
            <Accordion.Body>
              <div>
                <Form onSubmit={handleSubmit(consultar)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rango de consulta.</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("desde", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    />
                    <Form.Text className="text-muted">
                      Seleccióna el rango de fecha para realizar tu consulta
                    </Form.Text>
                    <Form.Control
                      type="date"
                      {...register("hasta", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    />
                    <Form.Text className="text-muted">
                      Seleccióna el rango de fecha para realizar tu consulta
                    </Form.Text>
                  </Form.Group>
                  <Button variant="warning" type="submit">
                    Consultar
                  </Button>
                </Form>
                <TableSecurity result={registros} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Estado de solicitudes</Accordion.Header>
            <Accordion.Body>
              <TablePermisos />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default EstadisticasUser;
