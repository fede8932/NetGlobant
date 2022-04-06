import { ListGroup } from 'react-bootstrap';
import Mapa from './Mapa';
const Consulta = function ({info}){
    console.log("consulta....",info)
    return (
        <>
            <ListGroup variant="flush">
                <ListGroup.Item><span className="listItem_">Cliente: </span><span>{info.data?info.data.cliente.bussinessName:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Sucursal: </span><span>{info.data?info.data.office.city:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Domicilio: </span><span>{info.data?info.data.office.address:""}</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Ciudad/provincia: </span>{info.data?info.data.provincia.name:""}</ListGroup.Item>
                <ListGroup.Item className='verqueonda'><span className="listItem_">Ingreso: <span className='ing'>{info.data?info.data.calendario.workDays[0].wishEntryHour.slice(14,19):""}</span></span><span className="listItem_">Egreso: <span className='egr'>{info.data?info.data.calendario.workDays[0].wishClosingHour.slice(14,19):""}</span></span></ListGroup.Item>
            </ListGroup>
            <div className="mapContainer">
                <Mapa coordenadas={[info.data.office.addressX,info.data.office.addressY]} cliente={{name:info.data.cliente.bussinessName , sucursal:info.data.office.city}}/>
            </div>
        </>
    )
}
export default Consulta