// fijarse la funciÃ³n showUserNameOrLogin, agregar admin.name en vez de admin solo
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../states/singleClient";
import { useInput } from "../hooks/useInput";

const Barra = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const admin = useSelector((state) => state.admin);
  const client = useInput();

  const handleClick = (url) => {
    navigate(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getClient(client.value));
  };

  const showUsernameOrLogin = () => {
    return admin ? (
      <p>{admin.name}</p>
    ) : (<>
      <Button onClick={() => handleClick("/admin/login")} variant="primary">
        Login
      </Button>
      <Button onClick={() => handleClick("/register")} variant="primary">
        Register
      </Button>
      </>
    );
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">NetGlobal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Clientes" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleClick("/client")}>
                Agregar Cliente
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ver Clientes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Agregar Sucursal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Ver Sucursales
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vigiladores" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleClick("/security")}>
                Agregar Vigilador
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleClick("/search/securities")}>
                Ver Vigiladores
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              {...client}
              type="search"
              placeholder="Buscar Clientes.."
              className="me-2"
              aria-label="Search"
            />
            {/* <input type="submit" value="Buscar" style={{backgroundColor: "blue"}} /> */}
          </Form>
          {showUsernameOrLogin()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
