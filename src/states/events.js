import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getAllEvents = createAsyncThunk(
    "GET_ALL_EVENTS",
    async () => {
      try {
        const allEvents = await axios.get("/api/admin/events");
        return allEvents.data;
      } catch (err) {
        console.log(err);
      }
    }
  );


  export const getAllEventsBranch = createAsyncThunk(
    "GET_ALL_EVENTS_BY_BRANCH",
    async (branchName) => {
      try {
        const allEventsBranch = await axios.get(`/api/admin/events/${branchName}`);
        return allEventsBranch.data;
      } catch (err) {
        console.log(err);
      }
    }
  );

const eventsReducer = createReducer([], {
  [getAllEvents.fulfilled]: (state, action) => action.payload,
  [getAllEventsBranch.fulfilled]: (state, action) => action.payload,
});

export default eventsReducer;
