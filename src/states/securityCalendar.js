import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const postSecurityToSchedule = createAsyncThunk(
    "POST_SECURITY_SCHEDULE",
    async (info) => {
      try {
        const securityPosted = await axios.post(
          `/api/admin/add/Calendar/office`, info
        );
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
  