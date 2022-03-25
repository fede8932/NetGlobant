import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { setPosition } from "./states/geoLocalizacion";
import { effectLogin } from "./states/user";

import Login from "./components/Login";
import ClientForm from "./components/ClientFrom";
import SecurityForm from "./components/SecurityForm";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F1EFEC",
      main: "#BFBDB8",
    },
    secondary: {
      main: "#F7C113",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) =>
        dispatch(setPosition([data.coords.latitude, data.coords.longitude])),
      (err) => console.error(err)
    );
  }, []);
  useEffect(() => {
    dispatch(effectLogin())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const ubi = useSelector((state) => state.ubicacion);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
