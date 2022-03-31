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
  async (security) => {
    console.log("SECURITY", security);
    try {
      const editedSecurity = await axios.put(
        `/api/admin/edit/security/${security.id}`,
        security
      );
      return editedSecurity.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteSecurity = createAsyncThunk(
  "DELETE_SECURITY",
  async (id) => {
    try {
      const deletedSecurity = await axios.delete(
        `/api/admin/remove/security/${id}`
      );
      return deletedSecurity.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securityReducer = createReducer([], {
  [getSecurity.fulfilled]: (state, action) => action.payload,
  [editSecurity.fulfilled]: (state, action) => action.payload,
  [deleteSecurity.fulfilled]: (state, action) => action.payload,
});

export default securityReducer;
