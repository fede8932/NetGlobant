// fijarse la funciÃ³n showUserNameOrLogin, agregar admin.name en vez de admin solo
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Barra = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.usuario);

  const handleLogout = () => {
    localStorage.clear();
  };
  const showUsernameOrLogin = () => {
    return user ? (
      <>
        <Navbar.Text style={{ color: "#696969" }}>
          <i className="bi bi-person"></i>
          <span className="userName">{user.name}</span>
        </Navbar.Text>
        <Button
          onClick={() => {
            navigate("/status");
          }}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Inicio
        </Button>
        <Button
          onClick={() => {
            navigate("/user/calendar");
          }}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Calendario
        </Button>
        <Button
          onClick={() => {
            navigate("/user/avisos");
          }}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Permisos
        </Button>
        <Button
          onClick={() => {
            navigate("/user/estadisticas");
          }}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Estadísticas
        </Button>
        <Button
          onClick={handleLogout}
          variant="warning"
          style={{ color: "#696969" }}
          href="/admin/login"
        >
          Logout
        </Button>
      </>
    ) : (
      <>
        <Button
          onClick={() => navigate("/admin/login")}
          variant="warning"
          style={{ color: "#696969" }}
        >
          Login
        </Button>
      </>
    );
  };
  return (
    <Navbar
      display="flex"
      position="relative"
      bg="warning"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand style={{ color: "#696969" }} href="/">
          NetGlobal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navUser">
          {showUsernameOrLogin()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
