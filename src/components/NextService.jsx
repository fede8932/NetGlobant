import { Container , Card , Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getWorkDay } from "../states/userCalendar"
import { orderTime, tiempoParcial , sumarDias } from "../geoCalculator"
import { useEffect } from "react"
import { getWorkDays } from "../states/nextFive"

const NextService = function (){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.usuario)
    const hoy = useSelector(state=>state.userCalendar.data)
    const office = useSelector(state=>state.nextWorkDays)
    useEffect(()=>{
        dispatch(getWorkDay({id:user.id , fecha:tiempoParcial()}))
        dispatch(getWorkDays({id:user.id , fechaIni : tiempoParcial() , fechaFin : tiempoParcial(sumarDias(new Date(),4)) }))
    },[])
    return (
        <>
            <Container className="userContainer">
                <h1>Calendario de servicios</h1>
                <Card border="warning" className="todayContainer">
                <Card.Header className="todayTitle">HOY</Card.Header>
                <Card.Body>
                    <Card.Title>{hoy?hoy.cliente.bussinessName:""}</Card.Title>
                    <Card.Text>
                    {`Sucursal ${hoy?hoy.office.name:""}, a las ${hoy?hoy.calendario.workDays[0].wishEntryHour.slice(11,16):""} hs.`}
                    </Card.Text>
                    <Button onClick={()=>{navigate('/user/masinfo')}} variant="warning">Más información</Button>
                </Card.Body>
                </Card>
                {office.workDays && office.workDays.map((cliente , i)=>{
                    return (
                        <div key={i}>
                        <Card style={{ width: '100%' , maxHeight: '7rem' , marginBottom : '0.5rem' }}>
                        <Card.Header style={{ maxHeight: '2rem' , display:'flex' }}>
                            <span>{i?orderTime(cliente.date,0):"Mañana"}</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text style={{ fontSize: "0.8rem" }}>
                            {`Sucursal ${office.name}, a las ${cliente.wishEntryHour.slice(11,16)} hs.`}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                    )
                })}
                <Button style={{ width: "100%" , marginBottom: '2rem'}} onClick={()=>{navigate("/user/info")}} variant="warning">Consultá tu calendario</Button>
            </Container>
        </>
    )
}


export default NextService