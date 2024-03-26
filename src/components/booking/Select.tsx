"use client";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
export default function Select() {
  return (
    <div className="container mx-auto min-h-56 max-w-4xl shadow-2xl rounded-2xl p-5 bg-white space-y-5 flex flex-col justify-center relative">
      <div className="absolute -top-2 font-poppin text-sm flex gap-3">
        <div className="bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] p-1 rounded-full text-white px-2">
          SPICYLATTE
        </div>
        <div className="bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] p-1 rounded-full text-white px-2">
          ADVENTURE
        </div>
        <div className="bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] p-1 rounded-full text-white px-2">
          EXPLORE
        </div>
      </div>
      <div className="justify-center  rounded-lg ">
        <TextField label="Search For Your Campground" className="min-w-full" />
      </div>
      <div className="flex min-w-full gap-10 justify-center ">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
          />
        </LocalizationProvider>
        <Autocomplete
          className="min-w-52 max-h-20"
          id=""
          options={["2 people", "3 people"]}
          renderInput={(params) => (
            <TextField {...params} label="Select Person" />
          )}
        />
      </div>
      <div className="min-w-64 min-h-14 bg-blue-600 absolute self-center rounded-2xl -bottom-8 "></div>
    </div>
  );
}
