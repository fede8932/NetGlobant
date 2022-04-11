import { ListGroup } from 'react-bootstrap';
import Mapa from './Mapa';
const Consulta = function ({datos}){
    console.log("consulta....",datos)
    const Render = ()=>(
            <>
            <ListGroup variant="flush">
                <ListGroup.Item><span className="listItem_">Cliente: </span><span>{datos.data?datos.data.cliente.bussinessName:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Sucursal: </span><span>{datos.data?datos.data.office.city:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Domicilio: </span><span>{datos.data?datos.data.office.address:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Ciudad/provincia: </span>{datos.data?datos.data.provincia.name:""}</ListGroup.Item>
                <ListGroup.Item className='verqueonda'><span className="listItem_">Ingreso: <span className='ing'>{datos.data?datos.data.calendario.workDays[0].wishEntryHour.slice(11,16):""}</span></span><span className="listItem_">Egreso: <span className='egr'>{datos.data?datos.data.calendario.workDays[0].wishClosingHour.slice(11,16):""}</span></span></ListGroup.Item>
            </ListGroup>
            <div className="mapContainer">
                <Mapa coordenadas={[datos.data.office.addressX,datos.data.office.addressY]} cliente={{name:datos.data.cliente.bussinessName , sucursal:datos.data.office.city}}/>
            </div>
        </>
        )
    return (<Render/>)
}
export default Consulta