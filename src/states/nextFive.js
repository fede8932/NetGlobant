import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkDays = createAsyncThunk("GET_WORK_DAYS", async (data) => {
  console.log(data)
    try {
      // const weekHour = await axios.get(`/api/security/next/five/days/${data.id}`);
      const weekClient = await axios.get(`/api/security/find/Office/Client/${data.id}/${data.fechaIni}/${data.fechaFin}`);
      console.log("soy client------->>>>",weekClient)
      // weekHour.data.workDays.shift()
      return weekClient.data.oficina[0]
    } catch (err) {
      console.log(err);
    }
  });

const nextWorkDayReducer = createReducer([], {
  [getWorkDays.fulfilled]: (state, action) => action.payload,
});

export default nextWorkDayReducer;