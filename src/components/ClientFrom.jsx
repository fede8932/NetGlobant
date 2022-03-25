import React from "react";
import { TextField, Grid, Box, Button, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useInput } from "../hooks/useInput";


const theme = createTheme();

const ClientForm = () => {
  const name = useInput();
  const cuit = useInput();
  const email = useInput();
  const address = useInput();
  const startContract = useInput();
  const endContract = useInput();

  const handleClick = (e) => {
    //   e.preventDefault();
    //   axios
    //     .post("?", {
    //       name: name.value,
    //       lastname: lastname.value,
    //       cuil: cuil.value,
    //       email: email.value,
    //       entryHour: entryHour.value,
    //       hoursPerDay: hoursPerDay.value,
    //     })
    //     .then((res) => res.data)
    //     .then(() => {
    //       alert("Vigilador agregado");
    //       navigate("/");
    //     })
    //     .catch((err) => console.log("error", err));
  };

  return (
    <ThemeProvider theme={theme}>
    <Box mt={5}>
      <Typography variant="h4"  >
      FORMULARIO DE CLIENTES
      </Typography>
     <br></br>
      <Grid  container>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="Nombre"
              name="name"
              variant="outlined"
              value={name.value}
              onChange={name.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="CUIT"
              name="cuit"
              variant="outlined"
              value={cuit.value}
              onChange={cuit.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={email.value}
              onChange={email.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="Dirección legal"
              name="address"
              variant="outlined"
              value={address.value}
              onChange={address.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Inicio de contrato"
              name="startContract"
              variant="outlined"
              value={startContract.value}
              onChange={startContract.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Fin de contrato"
              name="endContract"
              variant="outlined"
              value={endContract.value}
              onChange={endContract.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Button
          onClick={handleClick}
          variant="contained"
          type="submit"
        
        >
          ENVIAR
        </Button>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default ClientForm;
