import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBranchId } from "../states/branches";
import swal from "sweetalert";
import { getBranchId } from "../states/singleBranch";
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'

const CardBranchOffice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams();

  const branch = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getBranchId(id.id));
  }, []);

  const handleDelete = () => {
    dispatch(deleteBranchId(branch.id));

    swal({
      title: "La sucursal fue removida",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    navigate("/search/branchoffice");
  };

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <Card
        style={{
          width: "50rem",
          height: "20rem",
          margin: "0 auto",
          marginTop: "80px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "20px" }}>{branch.name}</Card.Title>
          <Card.Subtitle className="mb-2 mt-5 text-muted">
            Ciudad: {branch.city}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Dirección Legal: {branch.address}
          </Card.Subtitle>

          <Card.Text className="mb-2 mt-5">
            Horario de apertura: {branch.openHour}
          </Card.Text>
          <Card.Text>Horario de cierre: {branch.closeHour}</Card.Text>

          <Card.Text>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={() => navigate("/search/branchoffice")}
            >
              Cerrar
            </Button>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={() => handleClick(`/edit/branch/${branch.id}`)}
            >
             <BiEdit/>
              Editar
            </Button>
            <Button
              style={{
                float: "right",
                marginRight: "20px",
              }}
              variant="secondary"
              onClick={handleDelete}
            >
               <RiDeleteBin6Line/>
              Eliminar
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBranchOffice;
