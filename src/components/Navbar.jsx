import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { spacing } from "@mui/system";
import { red } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utils/themeConfig";

const useStyle = makeStyles((theme) => ({
  boton: {
    color:"#212121",
    backgroundColor: red
},
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { boton } = useStyle();

  const handleClick = () => {
    navigate("/user/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={boton}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NetGlobal
            </Typography>
            <Button onClick={handleClick} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Button color="secondary">boton</Button>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
