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
import { useSelector } from "react-redux";

const Barra = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);

  const handleClick = (url) => {
    navigate(url);
  };

  const showUsernameOrLogin = () => {
    return admin.name ? (
      <Button onClick={() => handleClick("/login")} variant="primary">
        Login
      </Button>
    ) : (
      admin.name
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
              <NavDropdown.Item href="#action4">
                Ver Vigiladores
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar Clientes.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Buscar</Button>
          </Form>
          {showUsernameOrLogin}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
