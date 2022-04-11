import * as React from 'react';
import { Container , Button , /* Col ,*/ Toast} from 'react-bootstrap';
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
    console.log(tiempoCompleto())
    if(ingColor!=="warning")return
      if(navigator.onLine){
      const servicio = await axios({
        method: "GET",
        url: `/api/security/myWorkDay/${user.id}/${tiempoParcial()}`,
      });
      const clientDirection = [servicio.data.office.addressX , servicio.data.office.addressY]
      console.log([clientDirection,ubicacion])
      if(haversineDistance(clientDirection , ubicacion , 1.60934)>200){
        toggleShowA()
        return
      }
      const ingreso = await axios({
        method: "PUT",
        url : `/api/security/myEffictiveWorkDay/entry/${user.id}/${tiempoCompleto()}`
      })
      console.log(ingreso)
    }else{
      localStorage.setItem("userIng", JSON.stringify({ id: user.id, fecha: tiempoParcial(), fechaHora: tiempoCompleto() , ubicacion:ubicacion }));
    }
    setIngColor("secondary")
    setOutColor("warning")
  }
  const checkOut = async ()=>{
    if(ingColor!=="secondary")return
    if(navigator.onLine){
      const servicio = await axios({
        method: "GET",
        url: `/api/security/myWorkDay/${user.id}/${tiempoParcial()}`,
      });
      const clientDirection = [servicio.data.office.addressX , servicio.data.office.addressY]
      console.log([clientDirection,ubicacion])
      if(haversineDistance(clientDirection , ubicacion , 1.60934)>200){
        toggleShowA()
        return
      }
      const ingreso = await axios({
        method: "PUT",
        url : `/api/security/myEffictiveWorkDay/close/${user.id}/${tiempoCompleto()}`
      })
      console.log(ingreso)
    }else{
      localStorage.setItem("userEgr", JSON.stringify({ id: user.id, fecha: tiempoParcial(), fechaHora: tiempoCompleto() , ubicacion:ubicacion }));
    }
    setIngColor("warning")
    setOutColor("secondary")
  }
  return (
    <div className="estadisticasContainer">
      <div className="responsiveContainer">
        <Container className="textContainer">
          <h4>Presioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Presioná "EGRESO", cuando seas relevado.</h4>
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
    </div>
    );
}