import React, { useState } from "react";
/* import { useInput } from "../hooks/useInput"; */
 import { Accordion, Form , Button, /* Table */} from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
/* import { useSelector } from "react-redux"; */
/* import axios from "axios"; */
import Footer from "./Footer"
import { useForm } from "react-hook-form";
import TableSecurity from "./TableSecurity";
import TablePermisos from "./TablePermisos";


const EstadisticasUser = () => {
 /*  const usuario = useSelector((state) => state.usuario); */
  const [registros , setRegistros] = useState([])
  const result=[{fecha: "21/03/2022" , cliente:"Fravega" , sucursal: "San Miguel" , horas : 12 },
  {fecha: "21/03/2022" , cliente:"Fravega" , sucursal: "San Miguel" , horas : 12 },
  {fecha: "22/03/2022" , cliente:"Fravega" , sucursal: "San Miguel" , horas : 12 },
  {fecha: "23/03/2022" , cliente:"Fravega" , sucursal: "San Miguel" , horas : 12 },
  {fecha: "24/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "25/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "26/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "27/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "28/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "29/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 },
  {fecha: "30/03/2022" , cliente:"Garbarino" , sucursal: "José C. Paz" , horas : 12 }]
 /*  const name = useInput();
  const motivo = useInput();
  const startDate = useInput();
  const endDate = useInput(); */
  const {register,handleSubmit,formState: { errors },} = useForm();

  const consultar = async (e) => {
    console.log(e.desde , e.hasta)
    // await axios({
    //   method: "POST",
    //   url: "/api/admin/add/client",
    //   data: {
    //     name: name.value,
    //   },
    // });
    setRegistros(result)
  };

  return (
    <div className="estadisticasContainer">
      <div
        style={{
          marginTop: "4rem",
        }}>
        <h1 style={{ marginLeft: "1.2rem",}}>Estadísticas</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0"
            style={{
            marginBottom: "1.5rem",
            }}>
            <Accordion.Header>Seguimiento de horas trabajadas</Accordion.Header>
            <Accordion.Body>
              <div>
                <Form onSubmit={handleSubmit(consultar)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rango de consulta.</Form.Label>
                    <Form.Control type="date"
                      {...register("desde", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}/>
                    <Form.Text className="text-muted">
                      Seleccióna el rango de fecha para realizar tu consulta
                    </Form.Text>
                    <Form.Control type="date"
                      {...register("hasta", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}/>
                    <Form.Text className="text-muted">
                    Seleccióna el rango de fecha para realizar tu consulta
                    </Form.Text>
                  </Form.Group>
                  <Button variant="warning" type="submit">
                    Consultar
                  </Button>
              </Form>
              <TableSecurity result={registros}/>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Estado de solicitudes</Accordion.Header>
            <Accordion.Body>
              <TablePermisos/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer/>
    </div>
  );
};

export default EstadisticasUser;