import { Container , Card , Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NextService = function (){
    const navigate = useNavigate()
    const clientes = [{name:"Fravega",sucursal: "San miguel",ingreso: "09:00"},
    {name:"Fravega",sucursal: "Polvorines",ingreso: "10:00"},
    {name:"Fravega",sucursal: "Fonavi",ingreso: "10:00"},
    {name:"Garbarino",sucursal: "San miguel",ingreso: "09:00"},
    {name:"Musimundo",sucursal: "San miguel",ingreso: "11:00"},]
    const today = clientes.shift()
    return (
        <>
            <Container className="userContainer">
                <h1>Calendario de servicios</h1>
                <Card border="warning" className="todayContainer">
                <Card.Header className="todayTitle">HOY</Card.Header>
                <Card.Body>
                    <Card.Title>{today.name}</Card.Title>
                    <Card.Text>
                    {`Sucursal ${today.sucursal}, a las ${today.ingreso} hs.`}
                    </Card.Text>
                    <Button onClick={()=>{navigate("/user/info")}} variant="warning">Más información</Button>
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
                            {`Sucursal ${cliente.sucursal}, a las ${cliente.ingreso} hs.`}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </Container>
        </>
    )
}


export default NextService