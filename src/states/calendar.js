import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCalendarOffice= createAsyncThunk("GET_CALENDAR_OFFICE", async ({id, day})=>{
    try{
        console.log("DATEEEEE", id, "ID", day)
   const calendarioOffice= await axios.get(`api/admin/calendar/office/${id}/${day}`)
   return calendarioOffice.data
    }catch(err){
        console.log(err)
    }
})

const calendarReducer= createReducer([], {
    [getCalendarOffice.fulfilled] : (state, action)=> action.payload
})
export default calendarReducer