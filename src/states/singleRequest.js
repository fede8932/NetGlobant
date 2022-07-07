import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

export const getRequestById = createAsyncThunk(
  "GET_REQUEST_BY_ID",
  async (id) => {
    try {
      const request = await axios.get(`/api/admin/oneResquest/${id}`);
      return request.data;
    } catch (err) {
      console.log(err);
    }
    
  }
);

export const editRequestById = createAsyncThunk(
  "EDIT_REQUEST_BY_ID",
  async ({ id, status }) => {
    try {
      const editedRequest = await axios.put(
        `/api/admin/request/absence/${id}`,
        { status: status }
      );
      swal({
        title: "Estado modificado",
        text: ".",
        icon: "success",
        button: "Aceptar",
      });
      return editedRequest.data;
    } catch (err) {
    }
 
  }
);

const requestReducer = createReducer(
  {},
  {
    [getRequestById.fulfilled]: (state, action) => action.payload,
    [editRequestById.fulfilled]: (state, action) => action.payload,
  }
);

export default requestReducer;
