import {combineReducers} from "redux";
import itemSlice from "./toolkitRedux/itemSlice";
import navbarSlice from "./toolkitRedux/navbarSlice";
import {configureStore} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    items: itemSlice,
    navbar: navbarSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

//export type RootState = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>
