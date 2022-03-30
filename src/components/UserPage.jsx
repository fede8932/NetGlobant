import * as React from 'react';
import { Container , Button , Col} from 'react-bootstrap';
import Footer from './Footer'


export default function UserPage() {
  return (
    <>
    <div className="responsiveContainer">
      <Container className="textContainer">
        <h4>Precioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Precioná "EGRESO", cuando seas relevado.</h4>
        <p>Deberás estar correctamente uniformado y listo en tu puesto de vigilancia al momento de iniciar.</p>
      </Container>
      <Container>
        <div className="d-grid gap-2">
          <Button variant="warning" size="lg">
            Ingreso
          </Button>
          <Button variant="secondary" size="lg">
            Egreso
          </Button>
        </div>
      </Container>
    </div>
    <Footer/>
    </>
    );
}