import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRequests = createAsyncThunk("GET_ALL_REQUESTS", async () => {
  try {
    const allRequests = await axios.get("/api/admin/all/request");
    return allRequests.data;
  } catch (err) {
    console.log(err);
  }
});

const requestsReducer = createReducer([], {
  [getAllRequests.fulfilled]: (state, action) => action.payload,
});

export default requestsReducer;
