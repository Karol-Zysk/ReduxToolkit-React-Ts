import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  numOfIcecreams: number;
};

const initialState: initialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state: initialState) => {
      state.numOfIcecreams--;
    },
    restocked: (state: initialState, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreams--
  //   }
  // }
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
