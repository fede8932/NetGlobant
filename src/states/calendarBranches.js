import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBranchesByClient = createAsyncThunk(
  "GET_ALL_BRANCHES_BY_CLIENT",
  async (clientId) => {
    try {
      const branchesByClient = await axios.get(
        `/api/admin/office/byclient/${clientId}`
      );
      return branchesByClient.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllBranchesByName = createAsyncThunk(
  "GET_ALL_BRANCHES_BY_NAME",
  async (name) => {
    try {
      console.log("ESTO ES NAME", name)
      const branches = await axios.get(`/api/admin/clientsname/${name}`);
      console.log("ESTO ES BRANCHES", branches)
      return branches.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const calendarBranchesReducer = createReducer([], {
  [getAllBranchesByClient.fulfilled]: (state, action) => action.payload,
  [getAllBranchesByName.fulfilled]: (state, action) => action.payload,
});

export default calendarBranchesReducer;
