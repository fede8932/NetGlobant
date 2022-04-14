import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRequestById } from "../states/singleRequest";
import { editRequestById } from "../states/singleRequest";
import { useForm } from "react-hook-form";

const EditRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = useSelector((state) => state.request);
  const id = useParams();
  const idRequest = id.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getRequestById(idRequest));
  }, []);

  console.log(idRequest);

  const onSubmit = async (data) => {
    try {
      data.id = idRequest;
      const editedRequest = await dispatch(editRequestById(data));
      navigate("/states");
    } catch (err) {
      console.log(err);
    }
  };

  return request.oneRequest ? (
    <>
      <div class="profile-card js-profile-card">
        <div
          style={{
            fontSize: "50px",
            position: "relative",
            left: "200px",
            top: "50px",
          }}
          variant="secondary"
        >
          {request.security.name}
          {request.security.lastName}
        </div>
        <div style={{ position: "relative", left: "230px", top: "80px" }}>
          <div class="profile-card__txt">
            <div style={{ marginBottom: "15px" }}>
              Fecha inicial: {request.oneRequest.initDate}
            </div>
            <div style={{ marginBottom: "15px" }}>
              Fecha final: {request.oneRequest.endDate}
            </div>

            <div style={{ marginBottom: "15px", marginRight: "470px" }}>
              Razón: {request.oneRequest.reason}
            </div>

            <div style={{ marginBottom: "15px", marginRight: "470px" }}>
              Estado actual: {request.oneRequest.status}
            </div>
          </div>
        </div>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}
        >
          <Form.Label className="labels">Nuevo Estado</Form.Label>

          <Form.Control
            as="select"
            size="ms"
            className="position-relative"
            placeholder={request.status}
            name="status"
            variant="outlined"
            {...register("status", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
            })}
          >
            <option> Pendiente </option>
            <option> Aceptado </option>
            <option> Rechazado </option>
          </Form.Control>
        </Form>

        <div>
          <Button
            style={{
              float: "right",
              marginRight: "45%",
              marginTop: "1%",
            }}
            variant="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            Editar
          </Button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );

  //   return(
  //     <>
  //     <div class="profile-card js-profile-card">
  //       <div
  //         style={{
  //           fontSize: "50px",
  //           position: "relative",
  //           left: "200px",
  //           top: "50px",
  //         }}
  //         variant="secondary"
  //       >
  //         {request.security.name}
  //         {request.security.lastName}
  //       </div>
  //       <div style={{ position: "relative", left: "230px", top: "80px" }}>
  //         <div class="profile-card__txt">
  //           <div style={{ marginBottom: "15px" }}>
  //             Fecha inicial: {request.oneRequest.initDate}
  //           </div>
  //           <div style={{ marginBottom: "15px" }}>
  //             Fecha final: {request.oneRequest.endDate}
  //           </div>

  //           <div style={{ marginBottom: "15px", marginRight: "470px" }}>
  //             Rasón: {request.oneRequest.reason}
  //           </div>

  //           <div style={{ marginBottom: "15px", marginRight: "470px" }}>
  //             Estado actual: {request.oneRequest.status}
  //           </div>
  //         </div>
  //       </div>
  //       <Form
  //         onSubmit={handleSubmit(onSubmit)}
  //         style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}
  //       >
  //         <Form.Label className="labels">Nuevo Estado</Form.Label>

  //         <Form.Control
  //           as="select"
  //           size="ms"
  //           className="position-relative"
  //           placeholder={request.status}
  //           name="status"
  //           variant="outlined"
  //           {...register("status", {
  //             required: {
  //               value: true,
  //               message: "Necesitas este campo",
  //             },
  //           })}
  //         >
  //           <option> Pendiente </option>
  //           <option> Aceptado </option>
  //           <option> Rechazado </option>
  //         </Form.Control>
  //       </Form>

  //       <div>
  //         <Button
  //           style={{
  //             float: "right",
  //             marginRight: "45%",
  //             marginTop: "1%",
  //           }}
  //           variant="secondary"
  //           onClick={handleSubmit(onSubmit)}
  //         >
  //           Editar
  //         </Button>
  //       </div>
  //     </div>
  //   </>
  //   )
};

export default EditRequest;
