import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/search";
import userReducer from "./features/user/user";

export const store = configureStore({
  reducer: {
    queryData: searchReducer,
    user: userReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
