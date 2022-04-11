import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClientById = createAsyncThunk("GET_CLIENTS_ID", async (id) => {
  try {
    const client = await axios.get(`/api/admin/clients/${id}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

const singleCalendarClient = createReducer(
  {},
  {
    [getClientById]: (state, action) => action.payload,
  }
);

export default singleCalendarClient;
