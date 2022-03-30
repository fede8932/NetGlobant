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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../states/singleClient";
import { useInput } from "../hooks/useInput";
import React from "react";

const Barra = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.usuario);
  const client = useInput();

  const handleClick = (url) => {
    navigate(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getClient(client.value));
  };

  const showUsernameOrLogin = () => {
    return admin.name ? (
      <>
        <Navbar.Text variant="secondary">{admin.name}</Navbar.Text>
        <Button
          onClick={() => handleClick("/register")}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Register
        </Button>
      </>
    ) : (
      <Button
        onClick={() => handleClick("/admin/login")}
        variant="warning"
        style={{ color: "#696969" }}
      >
        Login
      </Button>
    );
  };

  return (
    <Navbar bg="warning" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ color: "#696969" }} href="/">
          NetGlobal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", color: "#808080" }}
            navbarScroll
          >
            <NavDropdown title="Clientes" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleClick("/client")}>
                Agregar Cliente
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleClick("/clients")}>
                Ver Clientes
              </NavDropdown.Item>
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
              <NavDropdown.Item
                onClick={() => handleClick("/search/securities")}
              >
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
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form>
          {showUsernameOrLogin()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
