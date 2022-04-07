import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { getCloseSecurities } from "../states/securities";
import { useDispatch, useSelector } from "react-redux";

const AssignForm = () => {

  const dispatch = useDispatch();
  const closeSecurities = useSelector((state) => state.securities);
  const branch = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getCloseSecurities(branch));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = closeSecurities?.map((guardia, i) => {
    return (
      <option key={i} value={i}>
        {guardia.name} {guardia.lastName} --- {guardia.address}
      </option>
    );
  });

  const handleClick = async (data) => {
   
  };
  return (
    <form onSubmit={handleSubmit(handleClick)}>
      <div className="row mt-3">
        <div className="col-md-12">
          <Form.Label className="labels">Seleccione un vigilador</Form.Label>
          <Form.Control
            style={{ width: "200px" }}
            as="select"
            size="ms"
            className="position-relative"
            name="security"
            variant="outlined"
            {...register("security", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
            })}
          >
            {options}
          </Form.Control>
          
        </div>
      </div>
     
   
       
        
        
        <div id="assignBtn" className="text-center">
          <Button
            type="submit"
            variant="secondary"
            style={{ marginTop: "5px" }}
          >
            Asignar
          </Button>
        </div>
      
    </form>
  );
};

export default AssignForm;
