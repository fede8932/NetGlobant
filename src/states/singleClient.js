import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

export const postClient = createAsyncThunk("POST_CLIENT", async (client) => {
  try {
    const newClient = await axios.post("/api/admin/add/client", client);
    swal({
      title: "Cliente agregado",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    return newClient.data;
  } catch (err) {
    console.log(err);
  }
});

export const getClient = createAsyncThunk(
  "GET_CLIENT_NAME",
  async (clientName) => {
    try {
      const client = await axios.get(`/api/admin/clientsname/${clientName}`);
      return client.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getClientId = createAsyncThunk("GET_CLIENTS_ID", async (id) => {
  try {
    const client = await axios.get(`/api/admin/clients/${id}`);
    return client.data;
  } catch (err) {
    console.log(err);
  }
});

export const editClient = createAsyncThunk("EDIT_CLIENT", async (client) => {
  try {
    console.log("STORE DE REDUX", client)
    const editedClient = await axios.put(
      `/api/admin/edit/client/${client.id}`,
      client
    );
    swal({
      title: "El cliente fue editado",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    return editedClient.data;
  } catch (err) {
    console.log(err);
  }
});


export const disableClient = createAsyncThunk("DISABLE_CLIENT", async (data) => {
  try {
    const date = new Date()
    const disabledClient = await axios.post(`/api/admin/disabled/client/${data.id}`, {type: "client", inhabitedDate: date, reason: data.reason});
    swal("El cliente fue deshabilitado", {
      icon: "success",
      buttons: false,
      timer: 1000,
    });
    return disabledClient.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteClient = createAsyncThunk("DELETE_CLIENT", async (id) => {
  try {
    const deleteClient = await axios.delete(`/api/admin/remove/client/${id}`);
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
    [postClient.fulfilled]: (state, action) => action.payload,
    [disableClient.fulfilled]: (state, action) => action.payload,
  }
);

export default clientReducer;
