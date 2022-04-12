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
import securReducer from "./securityApp";
import calendarClientReducer from "./calendarClients";
import calendarBranchesReducer from "./calendarBranches";
import singleCalendarClient from "./singleCalendarClient";
import securitiesCalendarReducer from "./securitiesCalendar";
import securityCalendarReducer from "./securityCalendar"
import eventsReducer from "./events";
import eventReducer from "./singleEvent";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuario: userReducer,
    ubicacion: geoReducer,
    client: clientReducer,
    clients: allClientsReducer,
    security: securityReducer,
    device: deviceReducer,
    calendar: calendarReducer,
    securities: securitiesReducer,
    branches: branchesReducer,
    branch: branchReducer,
    securityApp: securReducer,
    calendarClients: calendarClientReducer,
    calendarBranches: calendarBranchesReducer,
    calendarClient: singleCalendarClient,
    securitiesCalendar: securitiesCalendarReducer,
    securityCalendar: securityCalendarReducer,
    events: eventsReducer,
    event: eventReducer
  },
});

export default store;
