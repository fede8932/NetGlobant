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

export const getCloseSecurities = createAsyncThunk(
  "GET_CLOSE_SECURITIES",
  async ({ provincyId, addressX, addressY }) => {
    try {
      console.log("X E Y", addressX, addressY);
      const closeSecurities = await axios({
        method: "GET",
        url: `/api/admin/securitiesByDistance/${provincyId}`,
        data: { x: addressX, y: addressY },
      });
      return closeSecurities.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securitiesReducer = createReducer([], {
  [getAllSecurities.fulfilled]: (state, action) => action.payload,
  [getCloseSecurities.fulfilled]: (state, action) => action.payload,
});

export default securitiesReducer;
