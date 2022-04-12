import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkDay = createAsyncThunk("GET_WORK_DAY", async (data) => {
  try {
    const today = await axios.get(`/api/security/myWorkDay/${data.id}/${data.fecha}`);
    console.log("soy today" , today)
    return today;
  } catch (err) {
    console.log(err);
  }
});

const workDayReducer = createReducer([], {
  [getWorkDay.fulfilled]: (state, action) => action.payload,
});

export default workDayReducer;