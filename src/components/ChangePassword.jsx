import React from "react";
import useInput from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { passChange } from "../states/user";

const ChangePassword = () => {
  const email = useInput();
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
      const tok = await passChange(email.value)
      navigate("/admin/login")
      swal({
        title: "Solicitud enviada",
        text: "Recibiras un correo, seguí los pasos para cambiar tu contraseña",
        icon: "success",
        button: "Aceptar",
      });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right" style={{ color: "grey" }}>
                OLVIDÉ MI CONTRASEÑA
              </h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Ingresa el mail de tu cuenta</Form.Label>
                <Form.Control
                  onChange={email.onChange}
                  type="email"
                  size="ms"
                  placeholder="E-mail"
                  className="position-relative"
                  name="bussinessName"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="row mt-2"></div>
            <div className="mt-5 text-center">
              <Button
                variant="warning"
                onClick={handleClick}
                className="btnAgregar btn btn-primary profile-button"
                type="button"
              >
                CAMBIAR CONTRASEÑA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
