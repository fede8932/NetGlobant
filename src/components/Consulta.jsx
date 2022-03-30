import { ListGroup } from 'react-bootstrap';
import Mapa from './Mapa';
const Consulta = function (){
    return (
        <>
            <ListGroup variant="flush">
                <ListGroup.Item><span className="listItem_">Cliente: </span><span>Razon social</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Sucursal: </span><span>Localidad/numero/prov de sucursal</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Calle: </span><span>Npmbre o numero de calle</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Altura: </span><span>numeracion</span></ListGroup.Item>
                <ListGroup.Item><span className="listItem_">Ciudad/provincia: </span><span>loc / prov</span></ListGroup.Item>
            </ListGroup>
            <div className="mapContainer">
                <Mapa/>
            </div>
        </>
    )
}
export default Consulta