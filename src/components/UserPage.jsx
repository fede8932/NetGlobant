import * as React from 'react';
import { Container , Button , Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer'
import { setPosition } from '../states/geoLocalizacion';
import haversineDistance from '../geoCalculator';
import { useEffect } from 'react';
import { timeFormat } from '../geoCalculator'; // trae la hora actual formateada AA-MM-DD HH:MM:SS-03


export default function UserPage() {
  const [ingColor , setIngColor] = React.useState("warning")
  const [outColor , setOutColor] = React.useState("secondary")
  const ubicacion = useSelector(state=>state.ubicacion)
  const dispatch = useDispatch()
  const clientDirection = [-34.51694950961221, -58.77232427009819] // esto se saca de la base de datos

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) =>
        dispatch(setPosition([data.coords.latitude, data.coords.longitude])),
      (err) => console.error(err)
    );
  }, []);

  const checkIn = ()=>{
    if(ingColor!=="warning")return
    if(haversineDistance(clientDirection , ubicacion , 1.60934)>15){
      console.log("no estas en tu puesto de trabajo")
      return
    }
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
    <>
    <div className="responsiveContainer">
      <Container className="textContainer">
        <h4>Precioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Precioná "EGRESO", cuando seas relevado.</h4>
        <p>Deberás estar correctamente uniformado y listo en tu puesto de vigilancia al momento de iniciar.</p>
      </Container>
      <Container>
        <div className="d-grid gap-2">
          <Button onClick={checkIn} variant={ingColor} size="lg">
            Ingreso
          </Button>
          <Button onClick={checkOut} variant={outColor} size="lg">
            Egreso
          </Button>
        </div>
      </Container>
    </div>
    <Footer/>
    </>
    );
}