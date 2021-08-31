import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IItem} from "../../types/IItem";
import axios from "axios";
import {RootState} from "../index";

export interface IItemsState {
    items: IItem[],
    isLoading: boolean,
    error: null | string,
    url: string
}

const initialState: IItemsState = {
    items: [],
    isLoading: false,
    error: null,
    url: ''
}

export const loadItems: any  = createAsyncThunk(
    'items/loadItems',
    async function (urlItem:string, {rejectWithValue}) {
        try{
            console.log("loadItems-++++++++++++++++++++++++--Begin")
            const response = await axios.get( urlItem)
            const data = response.data
            console.log("loadItems-========================--End")
            return data;
        } catch (error){
            return rejectWithValue(error.message);  // 'Server Error!'
        }
    }
)

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers:
    //    {
    //     setItems(state, action){
    //         state.items = action.payload
    //         console.log("itemsSlice-setItems")
    //     }
    // },
    {
        setUrlItems(state, action) {
            state.url = action.payload;
            console.log("itemsSlice-setUrlItems state.url=",state.url)
        }
    },
    extraReducers: {
        [loadItems.pending]: (state) => {
            console.log("itemsSlice-loadItems.pending")
            state.isLoading = true;
            state.error = null;
         },
        [loadItems.fulfilled]: (state, action) => {
            console.log("itemsSlice-loadItems.fulfilled")
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [loadItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {setUrlItems} = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items
export default itemsSlice.reducer;

