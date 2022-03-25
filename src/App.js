import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { setPosition } from "./states/geoLocalizacion";
import { effectLogin } from "./states/user";
import Login from "./components/Login";
import ClientForm from "./components/ClientFrom";
import SecurityForm from "./components/SecurityForm";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";
import { Route, Routes } from "react-router-dom";
import Oculto from "./components/Oculto";
import theme from "./utils/themeConfig";

function App() {
  const dispatch = useDispatch();
  const ubi = useSelector((state) => state.ubicacion);

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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Lists />
        <Oculto />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/client" element={<ClientForm />} />
          <Route path="/security" element={<SecurityForm />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
