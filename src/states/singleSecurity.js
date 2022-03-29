import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getSecurity = createAsyncThunk("GET_SECURITY", async (name) => {
  try {
    const security = await axios.get(`/api/securities/${name}`);
    return security.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteSecurity = createAsyncThunk(
  "DELETE_SECURITY",
  async (id) => {
    try {
      const deletedSecurity = await axios.delete(`/api/remove/security/${id}`);
      return deletedSecurity.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securityReducer = createReducer([], {
  [getSecurity]: (state, action) => action.payload,
});

export default securityReducer;