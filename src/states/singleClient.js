import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getClient = createAsyncThunk("GET_CLIENTS", async (clientName) => {
  try {
    const client = await axios.get(`/api/client/${clientName}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

const clientReducer = createReducer([], {
  [getClient]: (state, action) => action.payload,
});

export default clientReducer;

