import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getAllBranchesByClient } from "../states/branches";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getBranchName } from "../states/singleBranch";
import AssignFormSecurity from "./AssignFormSecurity";

const CalendarBranchFilter = (client) => {
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches);
  const branch = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getAllBranchesByClient(client.client.id));
  }, []);

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

  const onSubmit = (data) => {
    console.log("se selecciono una sucursal", data);
    dispatch(getBranchName(data.branch));
  };

  const showCalendarAssignForm = () => {
    return branch.id ? (
      <>
        <AssignFormSecurity style={{ minWidth: "400px" }} />
      </>
    ) : (
      <></>
    );
  };

  return (
   
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          width: "300px",
          left: "0px",
          top: "10px",
        }}
      >
        <Form.Label className="labels">Sucursal</Form.Label>
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
          onClick={handleSubmit(onSubmit)}
        >
          Siguiente
        </Button>
        {showCalendarAssignForm()}
      </Form>
    
  );
};

export default CalendarBranchFilter;
