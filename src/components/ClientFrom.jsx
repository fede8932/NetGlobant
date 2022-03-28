import React from "react";
import { TextField, Grid, Box, Button, Typography } from "@material-ui/core";
import { useInput } from "../hooks/useInput";

const ClientForm = () => {
  const bussinessName = useInput();
  const CUIT = useInput();
  const email = useInput();
  const legalAddress = useInput();
  const startContratDate = useInput();
  const endContratDate = useInput();

  const handleClick = (e) => {
      e.preventDefault();
      // axios
      //   .post("ruta", {
      //     bussinessName: bussinessName.value,
      //     CUIT: cuit.value,
      //     email: email.value,
      //     legalAddress: legalAddress.value,
      //     startContratDate: startContratDate.value,
      //     endContratDate: endContratDate.value,
      //   })
      //   .then((res) => res.data)
      //   .then(() => {
      //     alert("Cliente agregado");
      //     navigate("/");
      //   })
      //   .catch((err) => console.log("error", err));
  };

  return (
    
    <Box mt={5} py={15}  bgcolor="primary.light"  >
      <Typography variant="h4" color="secondary" >
        <Box>
        FORMULARIO DE CLIENTES
        </Box>
     
      </Typography>
     <br></br>
     <Box marginX={15} >
      <Grid  container>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="Nombre"
              name="bussinessName"
              variant="outlined"
              value={bussinessName.value}
              onChange={bussinessName.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="CUIT"
              name="CUIT"
              variant="outlined"
              value={CUIT.value}
              onChange={CUIT.onChange}
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
              name="legalAddress"
              variant="outlined"
              value={legalAddress.value}
              onChange={legalAddress.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Inicio de contrato"
              name="startContratDate"
              variant="outlined"
              value={startContratDate.value}
              onChange={startContratDate.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Fin de contrato"
              name="endContratDate"
              variant="outlined"
              value={endContratDate.value}
              onChange={endContratDate.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      </Box>
      <Box mt={3}>
        <Button
        color='secondary'
          onClick={handleClick}
          variant="contained"
          type="submit"
        
        >
          ENVIAR
        </Button>
      </Box>
    </Box>
  
  );
};

export default ClientForm;
