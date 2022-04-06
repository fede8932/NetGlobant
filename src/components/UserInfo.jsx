import * as React from 'react';
import { Form , Button , Container , /* ListGroup */ } from 'react-bootstrap';
import Footer from './Footer';
import Consulta from './Consulta';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function UserInfo() {
  const [info , setInfo] = React.useState({})
  const user = useSelector(state=>state.usuario)
  const {
    register,
    handleSubmit,
    /*formState: {  errors  ,}*/
  } = useForm();
  const consultar = async (date) => {
    const servicio = await axios({
      method: "GET",
      url: `/api/security/myWorkDay/${user.id}/${date.fecha}`,
    });
    setInfo(servicio)
    console.log(info)
  };

  return (
    <div className="estadisticasContainer">
    <Container className="userContainer">
        <h1>
          Calendario de servicios
        </h1>
        <Form onSubmit={handleSubmit(consultar)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de consulta.</Form.Label>
            <Form.Control type="date"
              {...register("fecha", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}/>
            <Form.Text className="text-muted">
              Seleccioná la fecha para realizar tu consulta.
            </Form.Text>
          </Form.Group>
          <Button variant="warning" type="submit">
            Consultar
          </Button>
        </Form><br />
        {info.data?(<Consulta info={info}/>):(<></>)}
    </Container>
    <Footer/>
    </div>
    );
}

