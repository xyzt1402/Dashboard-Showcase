import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RangeTimeType } from "../../Types/ultil.type";

interface StateType {
    formTime: RangeTimeType;
    rangeTime: number;
  }
  
  const initialState: StateType = {
    rangeTime: 300000,
    formTime: {
      from: parseFloat(((Date.now() - 300000) / 1000).toFixed()),
      to: parseFloat((Date.now() / 1000).toFixed()),
    },
  };
  
  const timeRangeSlice = createSlice({
    name: "timeRange",
    initialState,
    reducers: {
      setTimeRange(state: StateType, { payload }: PayloadAction<StateType>) {
        state.formTime = payload.formTime;
        state.rangeTime = payload.rangeTime;
      },
    },
  });
  
  export const { setTimeRange } = timeRangeSlice.actions;
  export default timeRangeSlice;