import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, Controller } from "react-hook-form";
// import { sendLogin } from "../states/user";

// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import {useDispatch} from 'react-redux'

export default function Login() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();



  const onSubmit = (data) => {
    console.log("data formulario login", data);
    // axios
    //   .post("/login", data)
    //   .catch(() => alert("Ingresa un Email o Contraseña Valida"))
    //   .then((user) => {
    //    localStorage.setItem('user', JSON.stringify(user.data)); 
    //    dispatch(sendLogin(user.data), navigate("/"));
    //   });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}control
                  helperText={error ? error.message : null}
                  type="email"
                />
              )}
              rules={{
                required: "Email required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Debe ser un email correcto",
                },
              }}
            />
            <br />
            <br />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
              rules={{
                required: "Contraseña requerida",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
                // pattern: {
                //   value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                //   message:
                //     "Password should contain at least 1 alphabet and 1 numeric value",
                // },
                validate: {
                  equals: (password) =>
                    password !== "password123" || "Elegí una contraseña segura",
                },
              }}
            />

            <br />
            <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar mi cuenta"
            />
            <Button
              onClick={handleSubmit(onSubmit)}
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  {"Olvidaste tu contraseña?"}
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  {"No tienes una cuenta?   "}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}