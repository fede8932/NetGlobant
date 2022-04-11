import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelectedSecurities = createAsyncThunk(
  "GET_SELECTED_SECURITIES",
  async (branchName) => {
    try {
      const selectedSecurities = await axios.get(
        `/api/admin/securities/office/${branchName}`
      );
      return selectedSecurities.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const securitiesCalendarReducer = createReducer([], {
  [getSelectedSecurities.fulfilled]: (state, action) => action.payload,
});

export default securitiesCalendarReducer;
