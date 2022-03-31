import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBranchId = createAsyncThunk("GET_BRANCH", async (id) => {
  try {
    const branch = await axios.get(`/api/admin/office/${id}`);
    return branch.data;
  } catch (err) {
    console.log(err);
  }
});

export const getBranchName = createAsyncThunk("GET_BRANCH_NAME", async (name) => {
  try {
    const branch = await axios.get(`/api/admin/officename/${name}`);
    return branch.data;
  } catch (err) {
    console.log(err);
  }
});

export const editBranchId = createAsyncThunk("EDIT_BRANCH", async (branch) => {
  try {
    const editBranch = await axios.put(`/api/admin/edit/office/${branch.id}`, branch);
    return editBranch.data;
  }catch (err) {
    console.log(err)
  }
})



const branchReducer = createReducer(
  {},
  {
    [getBranchId.fulfilled]: (state, action) => action.payload,
    [editBranchId.fulfilled]: (state, action) => action.payload,
    [getBranchName.fulfilled]: (state, action) => action.payload,
  }
);

export default branchReducer;
