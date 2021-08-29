import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {EUrlApart, IItem} from "../../types/IItem";
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
    url: EUrlApart.ITEM_DTO_NAME_REST_API_URL
}

export const loadItems: any  = createAsyncThunk(
    'items/loadItems',
    async function (urlItem:string, {rejectWithValue}) {
        try{
            const response = await axios.get( urlItem)
            return response.data;
        } catch (error){
            return rejectWithValue(error.message);  // 'Server Error!'
        }
    }
)

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setUrlItems(state, action) {
            state.url = action.payload;
        }
    },
    extraReducers: {
        [loadItems.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
         },
        [loadItems.fulfilled]: (state, action) => {
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

