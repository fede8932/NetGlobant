import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import geoReducer from "./geoLocalizacion";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    ubicacion: geoReducer,
    usuario: userReducer
  },
});

export default store;