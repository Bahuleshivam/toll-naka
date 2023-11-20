import { createSlice } from "@reduxjs/toolkit";

export const addVehicleEntry = createSlice({
  name: "addVelEnt",
  initialState: {
    selectToll: "",
    vehicleType: "",
    vehicleNumber: "",
    journeyType: {
      singleJourney: "",
      returnJourney: "",
    },
  },
  reducers: {
    addSelectToll: (state, action) => {
      return { ...state, selectToll: action.payload };
    },
  },
});

// Action creator
export const { addSelectToll } = addVehicleEntry.actions;

// Reducer
export default addVehicleEntry.reducer;
