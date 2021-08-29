import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {ETableVariant} from "../../types/IMain";

export interface INavbarState {
    value: number;
    variant: string;
}

const initialState: INavbarState = {
    value: 0,
    variant: ETableVariant.TABLE_FULL
}

const  navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
       navbarChange: (state:INavbarState) => {
           state.value += 1
       },
       setVariant: (state:INavbarState, action: any ) => {
           console.log('setVariant-1 state.variant=', state.variant)
           state.variant = action.payload
           console.log('setVariant-2 state.variant=', state.variant)
       }
    }
})

export const {navbarChange, setVariant} = navbarSlice.actions;

export const selectNavbar = (state: RootState) => state.navbar.value

export default navbarSlice.reducer;

