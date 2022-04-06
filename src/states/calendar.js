import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCalendarOffice= createAsyncThunk("GET_CALENDAR_OFFICE", async ({id, thisDay})=>{
    try{
        console.log("DATEEEEE", id, "ID", thisDay)
   const calendarioOffice= await axios.get(`api/admin/calendar/office/${id}/${thisDay}`)
   return calendarioOffice.data
    }catch(err){
        console.log(err)
    }
})

const calendarReducer= createReducer([], {
    [getCalendarOffice.fulfilled] : (state, action)=> action.payload
})
export default calendarReducer