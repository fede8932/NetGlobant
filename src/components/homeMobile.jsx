import { Container , Button} from "react-bootstrap"

const homeMobile = function(){
    return(
        <Container>
            <img src="https://netglobal.tech/wp-content/uploads/2020/12/NetGlobal-Horizontal-01.png" className="img-fluid" alt="..."></img>
            <Button className="appLogin" variant="warning">Login</Button>{' '}
        </Container>
    )
}
export default homeMobile