import {combineReducers} from "redux";
import {itemReducer} from "./itemReducer";
import {navbarReducer} from "./navbarReducer";

export  const rootReducer = combineReducers({
    items: itemReducer,
    navbar: navbarReducer,
})

export type RootState = ReturnType<typeof rootReducer>