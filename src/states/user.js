/* import axios from "axios"; */
import { createAction, createReducer , createAsyncThunk} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER")


export const effectLogin = createAsyncThunk("PERSISTENCIA", () => {
  //console.log(JSON.parse(localStorage.getItem('user')));
  return JSON.parse(localStorage.getItem('user'));
});

const userReducer = createReducer({}, {
  [setUser]: (state,action) => action.payload,
  [effectLogin.fulfilled]: (state, action) => action.payload,
})
 
export default userReducer;