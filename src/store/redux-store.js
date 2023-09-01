import { createStore } from "redux";
import { RootReducer } from "./root-reducer";

export const store = createStore(RootReducer);
