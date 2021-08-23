import {EItemActionTypes, IItem, IItemAction, IItemState} from "../../types/IItem";

const initialState: IItemState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action: IItemAction): IItemState => {
    switch (action.type) {
        case EItemActionTypes.GET_ITEMS:
            return {loading: true, error: null, items: []}
         case EItemActionTypes.GET_ITEMS_SUCCESS:
            return {loading: false, error: null, items: action.payload}
         case EItemActionTypes.GET_ITEMS_ERROR:
            return {loading: false, error: action.payload, items: []}
        default:
            return state
    }
}