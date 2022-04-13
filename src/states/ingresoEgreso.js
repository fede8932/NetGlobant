import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const workDay = async (data) => {
  try {
    const servicio = await axios.get(`/api/security/myWorkDay/${data.id}/${data.time}`);
    return servicio;
  } catch (err) {
    console.log(err);
  }
};

export const inRegister = async (data) => {
    try {
      const ingreso = await axios.put(`/api/security/myEffictiveWorkDay/entry/${data.id}/${data.time}/${data.loc}`);
      return ingreso;
    } catch (err) {
      console.log(err);
    }
  };

export const outRegister = async (data) => {
    try {
      const egreso = await axios.put(`/api/security/myEffictiveWorkDay/close/${data.id}/${data.time}/${data.loc}`);
      return egreso;
    } catch (err) {
      console.log(err);
    }
};


const checkInReducer = createReducer([], {
});

export default checkInReducer;