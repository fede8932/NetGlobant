import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import geoReducer from "./geoLocalizacion";
import clientReducer from "./singleClient";
import userReducer from "./user";
import securityReducer from "./singleSecurity";
import deviceReducer from "./device";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    ubicacion: geoReducer,
    usuario: userReducer,
    client: clientReducer,
    security: securityReducer,
    device : deviceReducer,
  },
});

export default store;
