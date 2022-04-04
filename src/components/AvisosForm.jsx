import React from "react";
import { useInput } from "../hooks/useInput";
import { Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";


const AvisosForm = () => {
  const usuario = useSelector((state) => state.usuario);

  const name = useInput();
  const motivo = useInput();
  const startDate = useInput();
  const endDate = useInput();

  const handleClick = async (e) => {
    e.preventDefault();

    await axios({
      method: "POST",
      url: "/api/admin/add/client",
      data: {
        name: name.value,
      },
    });
    swal({
      title: "Solicitud enviada",
      text: "Podrás ver el estado de la solicitud en 'Estadísticas'",
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
              <h4 className="text-right" style={{ color: "grey" }}>FORMULARIO DE PERMISOS</h4>
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
                  value={usuario.name}
                  disabled="true"
                />
              </div>
            </div>
            <div className="col-md-6">
                  <Form.Label className="labels">Inicio de licencia</Form.Label>
                  <Form.Control
                  type="date"
                    size="ms"
                    placeholder="MM/DD/AAAA"
                    className="position-relative"
                    name="startContratDate"
                    variant="outlined"
                    onChange={startDate.onChange}
                  />
            </div>
              <div className="col-md-6">
                  <Form.Label className="labels">Fin de licencia</Form.Label>
                  <Form.Control
                  type="date"
                    size="ms"
                    placeholder="MM/DD/AAAA"
                    className="position-relative"
                    name="endContratDate"
                    variant="outlined"
                    onChange={endDate.onChange}
                  />
              </div>
              <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Motivo</Form.Label>
                <div class="form-floating">
                <textarea onChange={motivo.onChange} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
              </div>
            </div>
            </div>
            <div className="row mt-3">
              <div className="row mt-2">
            </div>
            <div className="mt-5 text-center">
              <Button
                variant="warning"
                onClick={handleClick}
                className="btnAgregar btn btn-primary profile-button"
                type="button"
              >
                AGREGRAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisosForm;