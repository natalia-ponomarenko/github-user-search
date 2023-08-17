import { createSlice } from "@reduxjs/toolkit";

export type queryDataState = {
  queryData: string;
};

const initialState: queryDataState = {
  queryData: "",
};

const searchSlice = createSlice({
  name: "queryData",
  initialState,
  reducers: {
    setQueryData: (state, action) => {
      state.queryData = action.payload;
    },
    clearQueryData: (state) => {
      state.queryData = "";
    },
  },
});

export const { setQueryData, clearQueryData } = searchSlice.actions;

export default searchSlice.reducer;
