import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import geoReducer from "./geoLocalizacion";
import clientReducer from "./singleClient";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    ubicacion: geoReducer,
    usuario: userReducer,
    client: clientReducer
  },
});

export default store;
