import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../constants";
import axios from "axios";


export const getFlights = createAsyncThunk('flights/getFlights',
async()=>{
//api request
 const res = await axios.request(options);

 //format received data
const formatted = res.data.aircraft.map((item)=> ({

    id:item[0],
    code:item[1],
    lat:item[2],
    lng:item[3],
}))

return formatted;

})