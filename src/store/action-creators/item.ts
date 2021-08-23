import axios from "axios";
import {Dispatch} from "redux";
import {EItemActionTypes, EUrlApart, IItemAction} from "../../types/IItem";

export const getItems = (url:string) => {
    return async (dispatch: Dispatch<IItemAction>) => {
        try {
            dispatch({type: EItemActionTypes.GET_ITEMS})
            console.log("getItems-1 url=[" + url + "]")
            const response = await axios.get( url)
            dispatch({type: EItemActionTypes.GET_ITEMS_SUCCESS, payload: response.data})
            console.log(response.data)
        } catch (e) {
            dispatch({
                type: EItemActionTypes.GET_ITEMS_ERROR,
                payload:'Произошла ошибка при загрузке'
            })
        }
    }
}
