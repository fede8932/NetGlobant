import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSecurity } from "../states/singleSecurity";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const security = useSelector((state) => state.security);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const showPopup = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteSecurity(security[0].id));
    navigate("/search/securities");
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
        Eliminar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Al dar click en Eliminar, borrará de forma permamente el vigilador de
          su base de datos.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={handleDelete} variant="danger">
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
