import axios from "axios";

import { createAction, createReducer , createAsyncThunk} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER")

export const passChange = async (email)=>{
  try {
    const token = await axios.put(`/api/auth/forgotPasswordSecurity`,{email:email});
    return token.data
  } catch (err) {
    console.log(err);
  }
}

export const passChangeLogin = async (date)=>{
  try {
    const user = await axios.post("/api/auth/login",{email: date.email,password: date.password,admin: date.admin },);
    return user.data
  } catch (err) {
    console.log(err);
  }
}

export const passChangeOk = async (date)=>{
  try {
    const passOk = await axios.put(`http://localhost:3001/api/auth/newSecurityPassword/${date.token}`,{email:date.email , newPassword : date.newPassword});
    return passOk.data
  } catch (err) {
    console.log(err);
  }
}

export const effectLogin = createAsyncThunk("PERSISTENCIA", () => {
  return JSON.parse(localStorage.getItem('user'));
});

const userReducer = createReducer({}, {
  [setUser]: (state,action) => action.payload,
  [effectLogin.fulfilled]: (state, action) => action.payload,
})
 
export default userReducer;