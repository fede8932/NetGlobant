import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkDays = createAsyncThunk("GET_WORK_DAYS", async (id) => {
    try {
      const week = await axios.get(`/api/security/next/five/days/${id.id}`);
      week.data.workDays.shift()
      return week.data.workDays;
    } catch (err) {
      console.log(err);
    }
  });

const nextWorkDayReducer = createReducer([], {
  [getWorkDays.fulfilled]: (state, action) => action.payload,
});

export default nextWorkDayReducer;