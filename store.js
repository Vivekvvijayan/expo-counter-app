import { createStore } from "redux";
import counterReducer from "./src/reducers/counterReducer";



export const store = createStore(counterReducer);
