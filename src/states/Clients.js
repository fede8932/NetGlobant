import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllClients = createAsyncThunk("GET_ALL_CLIENTS", async () => {
  try {
    const clients = await axios.get('/api/admin/clients');
    return clients.data;
  } catch (err) {
    console.log(err);
  }
});

const allClientsReducer = createReducer([], {
  [getAllClients.fulfilled]: (state, action) => action.payload,
});

export default allClientsReducer;
