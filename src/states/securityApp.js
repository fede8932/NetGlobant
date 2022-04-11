import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getPermisos = createAsyncThunk("GET_SECURITY", async (id) => {
    console.log("soy el id",id)
  try {
    const permisos = await axios.get(`/api/security/absence/${id}`);
    return permisos;
  } catch (err) {
    console.log(err);
  }
});

const securReducer = createReducer([], {
  [getPermisos.fulfilled]: (state, action) => action.payload,
});

export default securReducer;