import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getAllBranches } from "../states/branches";
import { useDispatch, useSelector } from "react-redux";
import { getBranchName } from "../states/singleBranch";

const FormRecomendation = () => {
  const dispatch = useDispatch();

  const branches = useSelector((state) => state.branches);
  const branch = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getAllBranches());
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    console.log("elegir vigiladores");
    dispatch(getBranchName(data.branchOffice));

    
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ChoseSecurities = () => {};

  const options = branches?.map((branch) => {
    return (
      <option key={branch.id} value={branch.name}>
        {branch.name}
      </option>
    );
  });

  return (
    <>
      <div className="text-center">
        <p>
          {" "}
          En esta sección, el admin le asigna manualmente a cada sucursal,
          vigiladores que vivan cerca.
        </p>
        <br></br>
        1. El admin selecciona una sucursal
        <br></br>
        2. Se listan todos los vigiladores que viven en la misma provincia donde
        esta la sucursal
        <br></br>
        3. El admin tiene acceso a las direcciones de cada vigiladores
        <br></br>
        4. El admin selecciona manualmente los vigiladores, y se los asigna a
        esa sucursal
      </div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          width: "300px",
          left: "400px",
          top: "10px",
        }}
      >
        <Form.Label className="labels">Sucursal</Form.Label>
        <Form.Control
          as="select"
          size="ms"
          placeholder="Sucursal"
          className="position-relative"
          name="branchOffice"
          variant="outlined"
          {...register("branchOffice", {
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
          style={{ marginTop: "5px" }}
          variant="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          Siguiente
        </Button>

        {ChoseSecurities()}
      </Form>
    </>
  );
};

export default FormRecomendation;
