import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

export const postEvent = createAsyncThunk("POST_EVENT", async (event) => {
    try {
      const newEvent = await axios.post("/api/admin/add/event", 
      {
        date: event.date,
        start: event.start,
        end: event.end,
        branchName: event.branchName,
        securityName: event.CUIL
      });
      swal({
        title: "Evento agregado",
        text: ".",
        icon: "success",
        button: "Aceptar",
      });
      return newEvent.data;
    } catch (err) {
      console.log(err);
    }
  });


  const eventReducer = createReducer({}, {
    [postEvent.fulfilled]: (state, action) => action.payload,
    
  });
  
  export default eventReducer;
  