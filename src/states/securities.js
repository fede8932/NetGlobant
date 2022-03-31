import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSecurities = createAsyncThunk(
  "GET_ALL_SECURITIES",
  async () => {
    try {
      const allSecurities = await axios.get("/api/admin/securities");
      return allSecurities.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securitiesReducer = createReducer([], {
  [getAllSecurities]: (state, action) => action.payload,
});

export default securitiesReducer;
