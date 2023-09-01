import { combineReducers } from "redux";
import { AuthReducer } from "./redux-operation/auth/auth-reducer";

export const RootReducer = combineReducers({
  auth: AuthReducer,
});
