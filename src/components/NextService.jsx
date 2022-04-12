import { Container , Card , Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getWorkDay } from "../states/userCalendar"
import { tiempoParcial } from "../geoCalculator"
import { useEffect } from "react"

const NextService = function (){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.usuario)
    const hoy = useSelector(state=>state.userCalendar.data)
    const clientes = [{name:"Fravega",sucursal: "San miguel",ingreso: "09:00"},
    {name:"Fravega",sucursal: "Polvorines",ingreso: "10:00"},
    {name:"Fravega",sucursal: "Fonavi",ingreso: "10:00"},
    {name:"Garbarino",sucursal: "San miguel",ingreso: "09:00"},
    {name:"Musimundo",sucursal: "San miguel",ingreso: "11:00"},]
    const today = clientes.shift()
    useEffect(()=>{
        dispatch(getWorkDay({id:user.id , fecha:tiempoParcial()}))
    },[])
    const getDay = async (dia)=>{
        await dispatch(getWorkDay({id:user.id , dia}))
        navigate("/user/masinfo")
    }
    console.log(hoy)
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
                {clientes && clientes.map((cliente , i)=>{
                    return (
                        <div key={i}>
                        <Card style={{ width: '100%' , maxHeight: '7rem' , marginBottom : '0.5rem' }}>
                        <Card.Header style={{ maxHeight: '2rem' , display:'flex' }}>
                            <span>{i?"Poner la fecha":"Mañana"}</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{cliente.name}</Card.Title>
                            <Card.Text>
                            <a onClick={getDay}>{`Sucursal ${cliente.sucursal}, a las ${cliente.ingreso} hs.`}</a>
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