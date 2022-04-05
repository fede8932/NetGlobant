import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBranches = createAsyncThunk("GET_ALL_BRANCHES", async () => {
  try {
    const branches = await axios.get("/api/admin/office");
    return branches.data;
  } catch (err) {
    console.log(err);
  }
});


export const getAllBranchesByClient = createAsyncThunk("GET_ALL_BRANCHES_BY_CLIENT", async (clientId) => {
  try {  
    const branchesByClient = await axios.get(`/api/admin/office/byclient/${clientId}`);
    return branchesByClient.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteBranchId = createAsyncThunk("DELETE_BRANCH", async (id) => {
  try {
    const deleteBranch = await axios.delete(`/api/admin/remove/office/${id}`);
    return deleteBranch.data;
  } catch (err) {
    console.log(err);
  }
});

const branchesReducer = createReducer([], {
  [getAllBranches.fulfilled]: (state, action) => action.payload,
  [deleteBranchId.fulfilled]: (state, action) => action.payload,
  [getAllBranchesByClient.fulfilled]: (state, action) => action.payload,
});

export default branchesReducer;
