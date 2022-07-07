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
<<<<<<< HEAD
      console.log("X E Y", addressX, addressY);
      const closeSecurities = await axios({
        method: "GET",
        url: `/api/admin/securitiesByDistance/${provincyId}`,
        data: { x: addressX, y: addressY },
      });
=======
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA", provincyId, addressX, addressY)
      const closeSecurities = await axios.get(
        `/api/admin/securitiesByDistance/${provincyId}`,
        { x: addressX, y: addressY }
      );
>>>>>>> c4d9875d1ef794f526cf50fdf365d67e36956b2a
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
