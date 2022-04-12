import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";


export const postSecurityToSchedule = createAsyncThunk(
    "POST_SECURITY_SCHEDULE",
    async (info) => {
      try {
        console.log("info post schedule", info)
        const securityPosted = await axios.post(
          `/api/admin/add/Calendar/office`, info
        );
        swal({
          title: "El horario fue asignado",
          text: ".",
          icon: "success",
          button: "Aceptar",
        });
        return securityPosted.data;
      } catch (err) {
        console.log(err);
      }
    }
  );


  const securityCalendarReducer = createReducer({}, {
    [postSecurityToSchedule.fulfilled]: (state, action) => action.payload,
  });
  
  export default securityCalendarReducer;
  