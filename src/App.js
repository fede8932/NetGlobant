import React from "react";
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


function App() {
  const dispatch = useDispatch();
  const ubi = useSelector((state) => state.ubicacion);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((data) => dispatch(setPosition([data.coords.latitude , data.coords.longitude])), (err) => console.error(err))
    dispatch(effectLogin()).then(res=>console.log(res)).catch(err=>console.log(err))
  },[])

  return (
    
      <div>
        <Navbar />
    
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/client" element={<ClientForm />} />
          <Route path="/security" element={<SecurityForm />} />
          <Route path="/status" element={<UserPage />} />
        </Routes>
      </div>
 
  );
}

export default App;
