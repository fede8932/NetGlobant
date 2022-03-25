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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import {useDispatch} from 'react-redux'

const theme = createTheme();

export default function Login() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSub = (data) => {
  //   axios
  //     .post("/login", data)
  //     .catch(() => alert("Ingresa un Email o Contraseña Valida"))
  //     .then((user) => {
  //       dispatch(sendLogin(user.data), navigate("/"));
  //     });
  // };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "#ffc107" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <form /* onSubmit={handleSubmit(onSub)}*/>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Ingrese un email valido",
                  },
                })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", { required: true, minLength: 8 })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar mi cuenta"
              />
              <Button
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
    </ThemeProvider>
  );
}
