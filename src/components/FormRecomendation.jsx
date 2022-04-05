import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


const FormRecomendation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ChoseSecurities = () => {
    console.log("elegir vigiladores");
  };

  return (
    <>
      <Form
        // onSubmit={handleSubmit(onSubmit)}
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
          {/* {options} */}
        </Form.Control>

        <Button
          style={{ marginTop: "5px" }}
          variant="secondary"
        //   onClick={handleSubmit(onSubmit)}
        >
          Buscar sucursales
        </Button>

        {ChoseSecurities()}
      </Form>
    </>
  );
};

export default FormRecomendation;
