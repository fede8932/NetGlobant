import * as React from 'react';
import { Form , Button , Container , ListGroup } from 'react-bootstrap';
import Footer from './Footer';
import Mapa from './Mapa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function UserInfo() {
  const [info , setInfo] = React.useState({})
  const user = useSelector(state=>state.usuario)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const consultar = async (date) => {
    const servicio = await axios({
      method: "GET",
      url: `/api/security/myWorkDay/${user.id}/${date}`, //ver bien donde esta el id de user
    });
    setInfo(servicio)
  };

  return (
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
        <ListGroup variant="flush">
          <ListGroup.Item><span className="listItem_">Cliente: </span><span>Razon social</span></ListGroup.Item>
          <ListGroup.Item><span className="listItem_">Sucursal: </span><span>Localidad/numero/prov de sucursal</span></ListGroup.Item>
          <ListGroup.Item><span className="listItem_">Calle: </span><span>Npmbre o numero de calle</span></ListGroup.Item>
          <ListGroup.Item><span className="listItem_">Altura: </span><span>numeracion</span></ListGroup.Item>
          <ListGroup.Item><span className="listItem_">Ciudad/provincia: </span><span>loc / prov</span></ListGroup.Item>
        </ListGroup>
        <div className="mapContainer">
          <Mapa/>
        </div>
        <Footer/>
    </Container>
      
    );
}

