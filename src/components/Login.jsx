import LoginCss from "../style/Home.module.css";
import { useForm } from "react-hook-form";
import { Container, Button, Form } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../states/user";
import { useDispatch, useSelector } from "react-redux";
import "../style/estilos.scss";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin =
    useSelector((state) => state.device) === "mobile" ? false : true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = admin ? "administrator" : "security";
    const token = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: {
        email: data.email,
        password: data.password,
        admin: admin,
      },
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: token.data[user].id,
        name: token.data[user].name,
        token: token.data.jwt.token,
      })
    );
    dispatch(
      setUser({
        id: token.data[user].id,
        name: token.data[user].name,
        token: token.data.jwt.token,
      })
    );
    admin ? navigate("/") : navigate("/status");
  };

  return (
    <div id="fondologin">
      <Container id="main-container" className="d-grid h-100 ">
        <Form
          id="sign-in-form"
          className="text-center p-3 w-100 "
          onSubmit={handleSubmit(onSubmit)}
        >
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
                  {" "}
                  INICIAR SESIÓN
                </Button>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </Form>
      </Container>
      <Link to="/changePassword/admin">
        <p style={{ textAlign: "center" }}>¿Olvidaste la contraseña?</p>
      </Link>
    </div>
  );
}
