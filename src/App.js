import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPosition } from './states/geoLocalizacion';
import { effectLogin } from './states/user';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((data) => dispatch(setPosition([data.coords.latitude , data.coords.longitude])), (err) => console.error(err))
  },[])
  useEffect(()=>{
    dispatch(effectLogin()).then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  const ubi=useSelector(state=>state.ubicacion)
  return (
    <div className="App">
      <header className="App-header">
        <h2>{`latitud ${ubi[0]} Longitud ${ubi[1]}`}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
