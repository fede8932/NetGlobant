import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getBranchById = createAsyncThunk("GET_BRANCH_ID", async (id) => {
  try {
      console.log("ID", id)
    const branch = await axios.get(`/api/admin/office/${id}`);
    return branch.data;
  } catch (err) {
    console.log(err);
  }
});

const singleCalendarBranch = createReducer(
  {},
  {
    
    [getBranchById.fulfilled]: (state, action) => action.payload,
  }
);

export default singleCalendarBranch;
