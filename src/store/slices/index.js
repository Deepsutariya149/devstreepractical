import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./user";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const userActions = userSlice.actions;
