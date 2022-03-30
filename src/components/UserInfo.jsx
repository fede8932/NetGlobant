import * as React from 'react';
import { Form , Button , Container , ListGroup } from 'react-bootstrap';
import Mapa from './Mapa';
<<<<<<< HEAD
import '../style/mobile.scss'
=======
>>>>>>> 645a6903aa70605884100fdbd1a331cfd939a7a9


export default function UserInfo() {
  return (
    <Container className="userContainer">
        <h1>
          Calendario de servicios
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de consulta.</Form.Label>
            <Form.Control type="date"/>
            <Form.Text className="text-muted">
              Seleccioná la fecha para realizar tu consulta.
            </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit">
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
    </Container>
      
    );
}

