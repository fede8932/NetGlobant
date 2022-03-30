import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClient = createAsyncThunk("GET_CLIENT", async (clientName) => {
  try {
    const client = await axios.get(`/api/admin/clients/${clientName}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

const clientReducer = createReducer({}, {
  [getClient.fulfilled]: (state, action) => action.payload,
});

export default clientReducer;