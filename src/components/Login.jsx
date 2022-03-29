import LoginCss from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (evento) => {
    console.log("ESTO ES EVENTO EN LOGIN", evento);
    console.log(register);

    setTimeout(() => {
      if (evento.password === "123456") {
        setUser(evento);
      } else {
        setUser(null);
      }
    }, 4000);
  };

  return (
    <>
      <Container id="main-container" className="d-grid h-100 ">
        <Form id="sign-in-form" className="text-center p-3 w-100 " onSubmit={handleSubmit(onSubmit)}>
          <FiUser className="mt-5" style={{ color: "grey" }} size={50} />
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
                      <label
                        className={LoginCss.labelName}
                        // className={LoginCss.textoInput}
                      ></label>
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
                    variant="secondary"
                    size="ms"
                    type="submit"
                    value="submit"
                  >
                    {" "}
                    INICIAR SESIÓN
                  </Button>

                  {/* {!user && <div>Contraseña incorrecta</div>} */}
                
                <br></br>
                {/* <div className="border"></div> */}
                <br></br>
                <p>¿Aún no tienes cuenta?</p>
                {/* <Link  to="/register">
              <a >
                ¡Registrate!
              </a>
            </Link> */}
              </div>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
}
