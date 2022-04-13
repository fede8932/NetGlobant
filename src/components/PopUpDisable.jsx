import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { disableClient } from "../states/singleClient";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const showPopup = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const id = useParams();

  const clientId = id.id;
  const onSubmit = (data) => {
    swal({
      title: "Estas seguro que quieres deshabilitar al cliente?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((deshabilitar) => {
      if (deshabilitar) {
        data.id = clientId;
        dispatch(disableClient(data));

        navigate("/clients");
      }
    });
    console.log("esto es data", data);
  };

  return (
    <>
      <Button
        variant="danger"
        style={{
          float: "right",
          marginRight: "10px",
          marginTop: "10px",
          marginLeft: "100%",
        }}
        onClick={showPopup}
      >
        Deshabilitar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Motivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
              <Form.Label className="labels">
                Escribe la razón por la cual quiere deshabilitar al cliente
              </Form.Label>
              <Form.Control
                size="ms"
                className="position-relative"
                name="reason"
                variant="outlined"
                {...register("reason", {
                  required: {
                    value: true,
                    message: "Necesitas este campo",
                  },
                })}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={handleSubmit(onSubmit)} variant="danger">
            Deshabilitar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
