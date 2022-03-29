import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "./states/geoLocalizacion";
import { effectLogin } from "./states/user";
import Login from "./components/Login";
import ClientForm from "./components/ClientFrom";
import SecurityForm from "./components/SecurityForm";
import Navbar from "./components/Navbar";
import Register from "./components/Register"
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import Vigilador from "./components/Vigilador";
import "./style/index.scss"
import { effectDevice } from "./states/device";
import HomeMobile from "./components/homeMobile";

function App() {
  const dispatch = useDispatch();
  const ubi = useSelector((state) => state.ubicacion);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) =>
        dispatch(setPosition([data.coords.latitude, data.coords.longitude])),
      (err) => console.error(err)
    );
    dispatch(effectLogin())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch(effectDevice())
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home/mobile" element={<HomeMobile />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/security" element={<SecurityForm />} />
        <Route path="/status" element={<UserPage />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/securities" element={<Vigilador />} />
      </Routes>
    </div>

  );
}

export default App;
