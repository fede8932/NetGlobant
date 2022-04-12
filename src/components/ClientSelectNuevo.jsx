import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranchesByClient } from "../states/calendarBranches";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const ClientSelectNuevo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const client = useParams();
  const branches = useSelector((state) => state.calendarBranches);
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      //const branches = await dispatch(getAllBranchesByClient(client.id));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log("ESTO ES DATA", data);
      //navigate(`/calendar/${data.id}`)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Seleccione una sucursal</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          {...register("branch", {
            required: {
              value: true,
              message: "Necesitás este campo",
            },
          })}
          as="select"
          size="ms"
          placeholder="Sucursal"
          className="position-relative"
          name="branch"
          variant="outlined"
          style={{ margin: "0 auto", width: "40%" }}
        >
          {branches?.map((branch) => {
            return <option value={branch.id}>{branch.name}</option>;
          })}
        </Form.Control>
        <Button
            onClick={handleSubmit(onSubmit)}
            variant="warning"
            style={{ marginLeft: "45%" }}
          >
            Buscar
          </Button>
      </Form>
    </>
  );
};

export default ClientSelectNuevo;
