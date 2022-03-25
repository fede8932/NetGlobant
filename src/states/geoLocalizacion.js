import { createReducer, createAction } from "@reduxjs/toolkit";

export const setPosition = createAction("GEOLOCALIZACION");

const geoReducer = createReducer([], {
  [setPosition]: (state, action) => action.payload,
});

export default geoReducer;
