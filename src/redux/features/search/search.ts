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
  },
});

export const { setQueryData } = searchSlice.actions;

export default searchSlice.reducer;
