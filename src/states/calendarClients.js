import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllClients = createAsyncThunk("GET_ALL_CLIENTS", async () => {
  try {
    const allClients = await axios.get("/api/admin/clients");
    return allClients.data;
  } catch (err) {
    console.log(err);
  }
});

const calendarClientReducer = createReducer([], {
  [getAllClients.fulfilled]: (state, action) => action.payload,
});

export default calendarClientReducer;
