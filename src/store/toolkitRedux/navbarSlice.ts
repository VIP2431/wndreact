import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {ETableVariant} from "../../types/IMain";

export interface INavbarState {
    value: number;
    curVariant: string;
}

const initialState: INavbarState = {
    value: 0,
    curVariant: "TABLE_FULL"
}

const  navbarSlice = createSlice({
   name: 'navbar',
    initialState,
    reducers: {
       navbarChange: (state:INavbarState) => {
           state.value += 1
       },
       setVariant: (state:INavbarState, action: any) => {
           state.curVariant = action.payload
       }
    }
})

export const {navbarChange, setVariant} = navbarSlice.actions;

export const selectNavbar = (state: RootState) => state.navbar.value

export default navbarSlice.reducer;

