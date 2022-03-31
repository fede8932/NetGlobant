import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "./states/geoLocalizacion";
import { effectLogin } from "./states/user";
import Login from "./components/Login";
import ClientForm from "./components/ClientFrom";
import SecurityForm from "./components/SecurityForm";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import Vigilador from "./components/Vigilador";
import "./style/index.scss";
import Sidebar from "./components/Sidebar";
import Clients from "./components/Clients";
import { effectDevice } from "./states/device";
import HomeMobile from "./components/homeMobile";
import EditSecurity from "./components/EditSecurity";
import CardClient from "./components/CardClient";
import EditClient from "./components/EditClient";
import AdminClient from "./components/AdminClient";

function App() {
  const dispatch = useDispatch();
  const ubi = useSelector((state) => state.ubicacion);

 /*  useEffect(() => {
    dispatch(effectLogin())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    dispatch(effectDevice()).catch((err) => console.log(err));
  }, []);
 */
  return (
    <div>
      <Navbar />
    

      <Routes>
        <Route path="/home/mobile" element={<HomeMobile />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<CardClient />} />
        <Route path="/edit/client/:id" element={<EditClient />} />
        <Route path="/security" element={<SecurityForm />} />
        <Route path="/status" element={<UserPage />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/securities" element={<Vigilador />} />
        <Route path="/edit/security/:id" element={<EditSecurity />} />
        <Route path="/admin/client" element={<AdminClient />} />
      </Routes>
    </div>
  );
}

export default App;
