import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import geoReducer from "./geoLocalizacion";
import clientReducer from "./singleClient";
import userReducer from "./user";
import securityReducer from "./singleSecurity";
import deviceReducer from "./device";
import allClientsReducer from "./Clients";
import securitiesReducer from "./securities";
import branchesReducer from "./branches";
import branchReducer from "./singleBranch";
import calendarReducer from "./calendar";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    ubicacion: geoReducer,
    usuario: userReducer,
    client: clientReducer,
    clients: allClientsReducer,
    security: securityReducer,
    device: deviceReducer,
    calendar: calendarReducer,
    securities: securitiesReducer,
    branches: branchesReducer,
    branch: branchReducer,
  },
});

export default store;
