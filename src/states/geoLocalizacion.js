import { createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const setPosition = createAction("GEOLOCALIZACION");
export const pendientes = function (){
  let ingreso = JSON.parse(localStorage.getItem('userIng'))
  let egreso = JSON.parse(localStorage.getItem('userEgr'))

  if(navigator.onLine && ingreso){
    axios({
      method: "PUT",
      url : `/api/security/myEffictiveWorkDay/entry/${ingreso.id}/${ingreso.fechaHora}/${ingreso.ubicacion.toString()}`
    }).then(()=>{
      localStorage.removeItem('userIng');
      console.log("ingreso guardado")})
  }
  if(navigator.onLine && egreso){
    axios({
      method: "PUT",
      url : `/api/security/myEffictiveWorkDay/close/${egreso.id}/${egreso.fechaHora}/${egreso.ubicacion.toString()}`
    }).then(()=>{
      localStorage.removeItem('userEgr');
      console.log("egreso guardado")})
  }
}

const geoReducer = createReducer([], {
  [setPosition]: (state, action) => action.payload,
});

export default geoReducer;
