import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Footer from './Footer';

export default function UserPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido User
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
            Precioná el boton "INGRESO", en el momento exacto en el que comiences tu jornada laboral. Precioná "EGRESO", cuando seas relevado.
            </Typography>
            <Typography variant="body1">Deberás estar correctamente uniformado y listo en tu puesto de vigilancia al momento de iniciar.</Typography>
            <Box textAlign='center'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 14, 
                    mb: 2
                }}>
                <Button variant="contained" color="success">
                    INGRESO
                </Button>
                <Button variant="outlined" color="error">
                    EGRESO
                </Button>
            </Box>
        </Container>
        <Footer/>
    </Box>
  );
}