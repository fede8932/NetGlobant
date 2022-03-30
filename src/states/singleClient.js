import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClient = createAsyncThunk("GET_CLIENT", async (clientName) => {
  try {
    const client = await axios.get(`/api/admin/clients/${clientName}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

export const getClientId = createAsyncThunk("GET_CLIENTS_ID", async (id) => {
  try {
    const client = await axios.get(`/api/admin/client/${id}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

export const editClient = createAsyncThunk(
  "EDIT_CLIENT",
  async (id, client) => {
    try {
      const editClient = await axios.put(`/api/edit/client/${id}`, client);
      return editClient.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteClient = createAsyncThunk("DELETE_CLIENT", async (id) => {
  try {
    const deleteClient = await axios.delete(`/api/remove/client/${id}`);
    return deleteClient.data;
  } catch (err) {
    console.log(err);
  }
});

const clientReducer = createReducer(
  {},
  {
    [getClient.fulfilled]: (state, action) => action.payload,
    [getClientId.fulfilled]: (state, action) => action.payload,
    [editClient.fulfilled]: (state, action) => action.payload,
    [deleteClient.fulfilled]: (state, action) => action.payload,
  }
);

export default clientReducer;
