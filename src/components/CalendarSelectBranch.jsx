import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getAllBranchesByClient } from "../states/branches";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getBranchName } from "../states/singleBranch";
import Calendar from "./Calendar"
import { useParams } from "react-router-dom";
import { getClientId } from "../states/singleClient";

const CalendarSelectBranch = () => {
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches);
  const branch = useSelector((state) => state.branch);
  const client = useSelector((state) => state.client);
  

  useEffect(() => {
    dispatch(getAllBranchesByClient(client.id));
    dispatch(getClientId(client.id));
  }, []);

  console.log("QUE PASA",client);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = branches?.map((branch) => {
    return (
      <option key={branch.id} value={branch.name}>
        {branch.name}
      </option>
    );
  });

  const onSubmit = async (data) => {
    console.log("se selecciono una sucursal", data);
    dispatch(getBranchName(data.branch));
    

  };

  const showCalendar = () => {
    return branch.id ? (
      <>
      {/* <Calendar/>  */}
      </>
    ) : (
      <></>
    );
  };

  return (
    <>
      <h1
        style={{
          position: "relative",
          width: "300px",
          left: "300px",
          top: "5px",
        }}
      >
        {client.bussinessName}
      </h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          width: "300px",
          left: "300px",
          top: "10px",
        }}
      >
        <Form.Label className="labels">Elige una sucursal</Form.Label>
        <Form.Control
          as="select"
          size="ms"
          placeholder="Sucursal"
          className="position-relative"
          name="branch"
          variant="outlined"
          {...register("branch", {
            required: {
              value: true,
              message: "Necesitas este campo",
            },
          })}
        >
          <option>Selecciona una sucursal</option>
          {options}
        </Form.Control>

        <Button
          variant="secondary"
          style={{ marginTop: "5px" }}
          /* onClick={onSubmit} */
        >
          Siguiente
        </Button>
        {/* {showCalendar()} */}
      </Form>
   
    </>
  );
};

export default CalendarSelectBranch;
