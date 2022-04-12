import * as React from "react";
import LoginCss from "../style/Home.module.css";
import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaRegAddressCard } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    axios({
      method: "POST",
      url: "/api/auth/register",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsb2xpQGdtYWlsLmNvbSIsInN0YXJ0IjoxNjQ4NTU4NDQ2MzE0LCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQ4NTU4NDQ2LCJleHAiOjE2NDk4NTQ0NDZ9.MTma_QU6YlQ-DhCuZ6A8ud9VEnnMmPhHlSMX3CJVi03V75U5rBZOaqxlQyz_oJLrPthB_UDzm2JMcBkOgFEwI0B7M8Iz4Cud_WndXuaznLdY4Z7eCEnjni5it6oQ-BDDy75EXbJp4uWnSiwAS7Y9fgbqlC0itskh7KjvzjvWr7CuDPRbCqdTwIpzvbwbfNIXwNYTYgK1gPprqQ_Ov58nQ8-dU6S-ZiNMjD4xZwd2ii_cIHKaoqOutqhxElLOtAMrwnLP9MtiwGzx8pAkrk-zvgU9BIHZ7bq-XwZWp63Kv6smBdMXu6fWUpyog7-AT94-qNmMS46fys9KMlER2VWWLPa2crGu-jYgVdOoTCfqoDAPcEwkKjr1UOfzb1O-sLBioY5_2t2RuwQdMYoLD01b2AiffXNm7RoHKmWgM25I9qe0g_Z7PBH1fOCiHhLG5HX35_4isgFIs3MiGmXO5aJY6z1UD6yjgdgE7BZA4OfVl6LHGnprbMLLt-VbXve-k6WNHrI3L1n2aTIlfSWZZFmVwT7Nd0FMT-A5G1LbHBeHrnHIuTFf61KFtUI4zuFvDxsYfbpYosjhvCkfBQZl5lTgjLlBI5Tf4HGB3sVEWEF4WI48OWJQkuUVQWlS73CXaos5nOi0D9ShhltcqPO7MXTPnzWoSEqq9sHwGw01IaVtzQM",
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        admin: true,
      },
    })
      .then(() => {
        swal({
          title: "El usuario fue registrado",
          text: ".",
          icon: "success",
          button: "Aceptar",
        });
      })
      .then(navigate("/"));
  };

  return (
    <div id="fondo">
      <p
        style={{ marginTop: "50px", marginLeft: "500px", fontSize: "30px" }}
        variant="secondary"
      >
        REGISTRAR ADMINISTRADORES
      </p>
      <Container id="main-container" className="d-grid h-100 ">
        <Form
          id="sign-in-form"
          className="text-center p-3 w-100 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <FaRegAddressCard
            className="mt-1"
            style={{ color: "grey" }}
            size={50}
          />
          <div className={LoginCss.contenedor}>
            <div className={LoginCss.container} id="container">
              <div className={LoginCss.loginCentrado}>
                <Form.Group
                  className="mb-1 mt-3 "
                  controlId="sign-in-email-address"
                >
                  <div
                    className={`${LoginCss.inputBonito} ${
                      errors.email && LoginCss.error
                    }`}
                  >
                    <input
                      type="text"
                      autoComplete="off"
                      name="name"
                      placeholder="Nombre"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    />
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-1 mt-3 "
                  controlId="sign-in-email-address"
                >
                  <div
                    className={`${LoginCss.inputBonito} ${
                      errors.email && LoginCss.error
                    }`}
                  >
                    <input
                      type="text"
                      autoComplete="off"
                      name="email"
                      placeholder="Email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className={errors.email && LoginCss.mensajeError}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-1" controlId="sign-in-password">
                  <div
                    className={`${LoginCss.inputBonito}  ${
                      errors.password && LoginCss.error
                    }`}
                  >
                    <label className={LoginCss.labelName}></label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "La contraseña debe tener al menos 6 caracteres",
                        },
                      })}
                    />
                    {errors.password && (
                      <span
                        className={errors.password && LoginCss.mensajeError}
                      >
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </Form.Group>

                <Button
                  variant="warning"
                  size="ms"
                  type="submit"
                  value="submit"
                >
                  REGISTRARME
                </Button>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

// <Container id="main-container" className="d-grid h-100  ">
// <Form id="sign-in-form" className="text-center p-3 w-100 ">

//   <Form.Group className="mb-3 mt-3 ">
//     <Form.Control
//       type="name"
//       size="ms"
//       placeholder="Nombre"
//       className="position-relative"
//       value={name.value}
//       onChange={name.onChange}
//     />
//   </Form.Group>

//   <Form.Group className="mb-3 mt-3 ">
//     <Form.Control
//       type="email"
//       size="ms"
//       placeholder="Email"
//       className="position-relative"
//       value={email.value}
//       onChange={email.onChange}
//     />
//   </Form.Group>

//   <Form.Group className="mb-3 mt-3 ">
//     <Form.Control
//       type="password"
//       size="ms"
//       placeholder="Contraseña"
//       className="position-relative"
//       value={password.value}
//       onChange={password.onChange}
//     />
//   </Form.Group>

//   <div className="d-grid ">
//     <Button onClick={submit} variant="warning" size="ms"
//     type="submit"
//     value="submit">
//        {" "}
//       REGISTRARME
//     </Button>
//   </div>
// </Form>
// </Container>
