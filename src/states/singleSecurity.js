import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getSecurity = createAsyncThunk("GET_SECURITY", async (name) => {
  try {
    const security = await axios.get(`/api/admin/securities/${name}`);
    return security.data;
  } catch (err) {
    console.log(err);
  }
});

export const editSecurity = createAsyncThunk(
  "EDIT_SECURITY",
  async (id, security) => {
    try {
      const editedSecurity = await axios.put(
        `/api/edit/security/${id}`,
        security
      );
      return editSecurity.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securityReducer = createReducer(
  {},
  {
    [getSecurity]: (state, action) => action.payload,
  }
);

export default securityReducer;
