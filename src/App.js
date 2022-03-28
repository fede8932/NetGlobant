import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes , Route } from 'react-router-dom';
import { setPosition } from './states/geoLocalizacion';
import { effectLogin } from './states/user';
import Login from './components/Login'
import ClientForm from './components/ClientFrom'
import SecurityForm from './components/SecurityForm'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((data) => dispatch(setPosition([data.coords.latitude , data.coords.longitude])), (err) => console.error(err))
    dispatch(effectLogin()).then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  return (
    <div>
      <p>NAVBAR</p>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/security" element={<SecurityForm />} />
      </Routes>
    </div>
  );
}

export default App;




