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
import workDayReducer from "./userCalendar";
import eventsReducer from "./events";
import eventReducer from "./singleEvent";
import nextWorkDayReducer from "./nextFive";
import checkInReducer from "./ingresoEgreso";
import singleCalendarBranch from "./singleCalendarBranch"

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
    userCalendar: workDayReducer,
    events: eventsReducer,
    event: eventReducer,
    nextWorkDays: nextWorkDayReducer,
    ingresoEgreso: checkInReducer
    branchCalendar: singleCalendarBranch,
  },
});

export default store;
