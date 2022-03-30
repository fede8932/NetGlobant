import { createReducer , createAsyncThunk} from "@reduxjs/toolkit";

export const effectDevice = createAsyncThunk("DEVICE", () => {
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) return "mobile";
    return "desk"
});

const deviceReducer = createReducer([], {
  [effectDevice.fulfilled]: (state, action) => action.payload,
})


export default deviceReducer;