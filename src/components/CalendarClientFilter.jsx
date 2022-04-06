import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { getAllClients } from "../states/Clients";
import { getClient } from "../states/singleClient";
import { useSelector, useDispatch } from "react-redux";
import CalendarBranchFilter from "./CalendarBranchFilter";
import { useForm } from "react-hook-form";

const CalendarClientFilter = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const selectedClient = useSelector((state) => state.client);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  const options = clients?.map((client) => {
    return (
      <option key={client.id} value={client.bussinessName}>
        {client.bussinessName}
      </option>
    );
  });

  const onSubmit = async (data) => {
    try {
      dispatch(getClient(data.client));
    } catch (err) {}
  };

  const showCalendarBranchFilter = () => {
    return selectedClient.id ? (
      <>
        <CalendarBranchFilter client={selectedClient} />
      </>
    ) : (
      <></>
    );
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          width: "300px",
          left: "300px",
          top: "10px",
        }}
      >
        <Form.Control
          as="select"
          size="ms"
          placeholder="Cliente"
          className="position-relative"
          name="client"
          variant="outlined"
          {...register("client", {
            required: {
              value: true,
              message: "Necesitas este campo",
            },
          })}
        >
          <option>Selecciona un cliente</option>
          {options}
        </Form.Control>

        <Button
          style={{ marginTop: "5px" }}
          variant="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          Sigiente
        </Button>

        {showCalendarBranchFilter()}
      </Form>
    </>
  );
};

export default CalendarClientFilter;
