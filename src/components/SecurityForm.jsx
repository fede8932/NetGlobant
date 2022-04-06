import React from "react";
import { useInput } from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSecurity } from "../states/singleSecurity";

const SecurityForm = () => {
  const name = useInput();
  const lastName = useInput();
  const cuil = useInput();
  const email = useInput();
/*   const entryHour = useInput(); */
  const address = useInput();
  const provincie = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seguridad = useSelector((state) => state.security);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(
      createSecurity({
        name: name.value,
        lastName: lastName.value,
        CUIL: cuil.value,
        email: email.value,
        address: address.value,
        provincie: provincie.value,
        password: password.value,
      })
    );

    swal({
      title: "Vigilador agregado",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });

    navigate(`/search/securities/${seguridad.id}`);
  };

  return (
    <>
      <div id="fondo">
        <div className="container rounded  mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right"></div>
            <div className="col-md-5 border-right">
              {/* <FaWpforms className="mt-5" style={{ color: "grey" }} size={50} /> */}
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right" style={{ color: "grey" }}>
                    ALTA DE VIGILADORES
                  </h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <Form.Label className="labels">Nombre</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Nombre"
                      className="position-relative"
                      name="bussinessName"
                      variant="outlined"
                      value={name.value}
                      onChange={name.onChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Form.Label className="labels">Apellido</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Apellido"
                      className="position-relative"
                      name="Apellido"
                      variant="outlined"
                      value={lastName.value}
                      onChange={lastName.onChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <Form.Label className="labels">CUIL</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="CUIL"
                      className="position-relative"
                      name="cuil"
                      variant="outlined"
                      value={cuil.value}
                      onChange={cuil.onChange}
                    />
                  </div>

                  <div className="row mt-2">
                    {/*
                    <div className="col-md-6">
                      <Form.Label className="labels">Turno</Form.Label>
                      <Form.Control
                        size="ms"
                        placeholder="Dia/Noche"
                        className="position-relative"
                        name="entryHour"
                        variant="outlined"
                        value={entryHour.value}
                        onChange={entryHour.onChange}
                      />
                    </div> */}

                    <div className="col-md-6">
                      <Form.Label className="labels">Dirección</Form.Label>
                      <Form.Control
                        size="ms"
                        placeholder="Dirección"
                        className="position-relative"
                        name="address"
                        variant="outlined"
                        value={address.value}
                        onChange={address.onChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <Form.Label className="labels">Provincia</Form.Label>
                      <Form.Control
                        size="ms"
                        placeholder="Provincia"
                        className="position-relative"
                        name="provincia"
                        variant="outlined"
                        value={provincie.value}
                        onChange={provincie.onChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <Form.Label className="labels">Email</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Email"
                      className="position-relative"
                      name="email"
                      variant="outlined"
                      value={email.value}
                      onChange={email.onChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <Form.Label className="labels">Contraseña</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Contraseña"
                      className="position-relative"
                      name="contraseña"
                      variant="outlined"
                      value={password.value}
                      onChange={password.onChange}
                      type="password"
                    />
                  </div>

                  {/* <div  className="col-md-12">
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="sm"
                        variant="secondary"
                        title="Turno"
                      >
                        <Dropdown.Item eventKey="1">Día</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Noche</Dropdown.Item>
                      </DropdownType>
                    ))}
                  </div> */}
                </div>
                <div className="mt-5 text-center">
                  <Button
                    variant="warning"
                    onClick={handleClick}
                    className="btn btn-primary profile-button"
                    type="button"
                  >
                    AGREGRAR
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityForm;
