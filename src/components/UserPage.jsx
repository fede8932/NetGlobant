import * as React from 'react';
import { Container , Button , Col , Toast} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer'
import { setPosition } from '../states/geoLocalizacion';
import haversineDistance from '../geoCalculator';
import { useEffect } from 'react';
import axios from 'axios';
import { tiempoParcial , tiempoCompleto } from '../geoCalculator'; // trae la hora actual formateada AA-MM-DD HH:MM:SS-03


export default function UserPage() {
  const [showA, setShowA] = React.useState(false);
  const toggleShowA = () => setShowA(!showA);
  const [ingColor , setIngColor] = React.useState("warning")
  const [outColor , setOutColor] = React.useState("secondary")
  const ubicacion = useSelector(state=>state.ubicacion)
  const user = useSelector(state=>state.usuario)
  const dispatch = useDispatch()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) =>
        dispatch(setPosition([data.coords.latitude, data.coords.longitude])),
      (err) => console.error(err)
    );
  }, []);

  const checkIn = async ()=>{
    if(ingColor!=="warning")return
    const servicio = await axios({
      method: "GET",
      url: `/api/security/myWorkDay/${user.id}/${tiempoParcial()}`,
    });
    const clientDirection = [servicio.data.office.addressX , servicio.data.office.addressY]
    console.log([clientDirection,ubicacion])
    if(haversineDistance(clientDirection , ubicacion , 1.60934)>5000){
      toggleShowA()
      return
    }
    const ingreso = await axios({
      method: "PATCH",
      url : `/api/security/myEffictiveWorkDay/${user.id}/:${tiempoCompleto()}`
    })
    console.log(ingreso)
    setIngColor("secondary")
    setOutColor("warning")
    console.log("ubicacion")
  }
  const checkOut = ()=>{
    if(ingColor!=="secondary")return
    setIngColor("warning")
    setOutColor("secondary")
    console.log("ubicacion")
  }
  return (
    <div className="estadisticasContainer">
      <div className="responsiveContainer">
        <Container className="textContainer">
          <h4>Presioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Precioná "EGRESO", cuando seas relevado.</h4>
          <p>Deberás estar correctamente uniformado y listo en tu puesto de vigilancia al momento de iniciar.</p>
        </Container>
        <Container>
          <div className="d-grid gap-2">
            <Button onClick={checkIn} variant={ingColor} size="lg">
              Ingreso
            </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">No es posible registrar el ingreso.</strong>
            </Toast.Header>
            <Toast.Body>No estas en tu lugar de vigilancia.</Toast.Body>
          </Toast>
            <Button onClick={checkOut} variant={outColor} size="lg">
              Egreso
            </Button>
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
    );
}