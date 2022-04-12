import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

export const postEvent = createAsyncThunk("POST_EVENT", async (event) => {
  try {
    const newEvent = await axios.post("/api/admin/add/event", {
      date: event.date,
      start: event.start,
      end: event.end,
      branchName: event.branchName,
      securityName: event.completeName,
    });
    swal({
      title: "Evento agregado",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    return newEvent.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteEvent = createAsyncThunk(
  "DELETE_EVENT_FROM_CALENDAR",
  async (id) => {
    try {
      const deletedEvent = await axios.delete(`/api/admin/deleteEvent/${id}`);
      return deletedEvent.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editEvent = createAsyncThunk(
  "EDIT_EVENT_FROM_CALENDAR",
  async (event) => {
    try {
      const editedEvent = await axios.put(
        `/api/admin/edit/event/${event.id}`,
        event
      );
      return editedEvent.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const eventReducer = createReducer(
  {},
  {
    [postEvent.fulfilled]: (state, action) => action.payload,
    [deleteEvent.fulfilled]: (state, action) => action.payload,
    [editEvent.fulfilled]: (state, action) => action.payload,
  }
);

export default eventReducer;
