import * as React from 'react';
import { Container , Button , /* Col ,*/ Toast} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from '../states/geoLocalizacion';
import haversineDistance from '../geoCalculator';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { tiempoParcial , tiempoCompleto } from '../geoCalculator'; // trae la hora actual formateada AA-MM-DD HH:MM:SS-03
import { workDay , inRegister , outRegister } from '../states/ingresoEgreso';

export default function UserPage() {
  const guardado = localStorage.getItem('estado')?JSON.parse(localStorage.getItem('estado')):{color:"warning" , text:"Ingreso" , estado:"Fuera de servicio" ,class:"egr"};
  const [ingColor , setIngColor] = React.useState(guardado)
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

  const handleClick =()=>{
    if(ingColor.color==="warning"){
      ingreso()
    }else{
      egreso()
    }
  }

  const address = async()=>{
    const servicio = await workDay({id:user.id , time:tiempoParcial()})
    const clientDirection = [servicio.data.office.addressX , servicio.data.office.addressY]
    return clientDirection
  }
  const checkIn = async()=>{
    const ingreso = await inRegister({id:user.id , time:tiempoCompleto() , loc : ubicacion.toString()})
    return ingreso
  }

  const ingreso = async()=>{
    if(navigator.onLine){
      const clientAddress = await address()
      if(haversineDistance(clientAddress , ubicacion , 1.60934)>200){
        swal({
          title: "No estás en tu lugar de vigilancia!",
          text: "Si crees que es un error, presioná Ingresar. De lo contrario presioná Cancelar",
          icon: "warning",
          buttons: ["Cancelar", "Ingresar"],
        })
        .then((willDelete) => {
          if (willDelete) {
            checkIn().then(res=>{
              if(res.data==="Created"){
                swal("Tu ingreso se registró con exíto", {
                  icon: "success",
                });
                setIngColor({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"})
                localStorage.setItem('estado', JSON.stringify({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"}));
              }
            })
          } else {
            swal("Tu ingreso no fue registrado");
          }
        });
        return
      }else{
        checkIn().then(res=>{
          if(res.data==="Created"){
            swal("Tu ingreso se registró con exíto", {
              icon: "success",
            })
            setIngColor({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"})
            localStorage.setItem('estado', JSON.stringify({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"}));
          }
        })
      }
    }else{
      localStorage.setItem("userIng", JSON.stringify({ id: user.id, fecha: tiempoParcial(), fechaHora: tiempoCompleto() , ubicacion:ubicacion }))
      setIngColor({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"})
      localStorage.setItem('estado', JSON.stringify({color:"secondary" , text:"Egreso",estado:"En servicio",class:"ing"}));
    }
  }

  const checkOut = async()=>{
    const egreso = await outRegister({id:user.id , time:tiempoCompleto() , loc : ubicacion.toString()})
    return egreso
  }

  const egreso = async()=>{
    if(navigator.onLine){
      const clientAddress = await address()
      if(haversineDistance(clientAddress , ubicacion , 1.60934)>200){
        swal({
          title: "No estás en tu lugar de vigilancia!",
          text: "Si crees que es un error, presioná Egreso. De lo contrario presioná Cancelar",
          icon: "warning",
          buttons: ["Cancelar", "Egreso"],
        })
        .then((willDelete) => {
          if (willDelete) {
            checkOut().then(res=>{
              if(res.data==="Created"){
                swal("Tu salida se registró con exíto", {
                  icon: "success",
                });
                setIngColor({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"})
                localStorage.setItem('estado', JSON.stringify({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"}));
              }
            })
          } else {
            swal("Tu salida no fue registrado");
          }
        });
        return
      }else{
        checkIn().then(res=>{
          if(res.data==="Created"){
            swal("Tu salida se registró con exíto", {
              icon: "success",
            })
            setIngColor({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"})
            localStorage.setItem('estado', JSON.stringify({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"}));
          }
        })
      }
    }else{
      localStorage.setItem("userEgr", JSON.stringify({ id: user.id, fecha: tiempoParcial(), fechaHora: tiempoCompleto() , ubicacion:ubicacion }))
      setIngColor({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"})
      localStorage.setItem('estado', JSON.stringify({color:"warning" , text:"Ingreso",estado:"Fuera de servicio",class:"egr"}));
    }
  }

  return (
    <div className="estadisticasContainer">
      <div className="responsiveContainer">
        <Container className="textContainer">
          <h1 style={{marginBottom:'2rem'}} className={ingColor.class}>{ingColor.estado}</h1>
          <h4>Presioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Presioná "EGRESO", cuando seas relevado.</h4>
          <p>Deberás estar correctamente uniformado y listo en tu puesto de vigilancia al momento de iniciar.</p>
        </Container>
        <Container>
          <div className="d-grid gap-2">
            <Button style={{height:'5rem'}} onClick={handleClick} variant={ingColor.color} size="lg">
              {ingColor.text}
            </Button>
          </div>
        </Container>
      </div>
    </div>
    );
}