import React from "react";
import { TextField, Grid, Box, Button, Typography  } from "@material-ui/core";

import { useInput } from "../hooks/useInput";

const SecurityForm = () => {
  const name = useInput();
  const lastName = useInput();
  const cuil = useInput();
  const email = useInput();
  const entryHour = useInput();
  const hoursPerDay = useInput();

  const handleClick = (e) => {
    //   e.preventDefault();
    console.log(name.value, lastName.value, email.value, cuil.value);

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
    <Box mt={5}>
      <Typography variant="h4">FORMULARIO DE VIGILADORES</Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="Nombre"
              name="firstname"
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
              label="Apellido"
              name="lastname"
              variant="outlined"
              value={lastName.value}
              onChange={lastName.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              label="CUIL"
              name="cuil"
              variant="outlined"
              value={cuil.value}
              onChange={cuil.onChange}
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
        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Horario Laboral"
              name="entryHour"
              variant="outlined"
              value={entryHour.value}
              onChange={entryHour.onChange}
              required
              fullWidth
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box m={2}>
            <TextField
              label="Horas por día"
              name="hoursPerDay"
              variant="outlined"
              value={hoursPerDay.value}
              onChange={hoursPerDay.onChange}
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
  );
};

export default SecurityForm;
