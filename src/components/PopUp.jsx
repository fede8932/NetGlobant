import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSecurity } from "../states/singleSecurity";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const security = useSelector(state => state.security)

  const handleClose = () => setShow(false);
  const handleDelete = () => {
    setShow(true);
    dispatch(deleteSecurity(security.id));
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
        onClick={handleDelete}
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
          <Button variant="danger">Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
