import {EPageBrand} from "../../menu/MenuBrand";
import {URL_ITEMS_INIT_STATE,
    VARIANT_WND_MAIN_INIT_STATE} from "./IPageMain";
import {useDispatch} from "react-redux";
import {setVariant} from "../../store/toolkitRedux/navbarSlice";
import {setUrlItems} from "../../store/toolkitRedux/itemSlice";

export const initParamPageMain = () => {
    console.log("initParamPageMain")
    //
    // localStorage.setItem(EPageBrand.CURRENT_HOME, EPageBrand.PAGE_MAIN)
    //
    // const dispatch = useDispatch();
    //
    // let savVariant = localStorage.getItem("mainWndVariant")
    // if(typeof savVariant != "string"){
    //     savVariant =  VARIANT_WND_MAIN_INIT_STATE
    //     localStorage.setItem("mainWndVariant", savVariant)
    // }
    // dispatch(setVariant( savVariant))
    //
    // let savUrl = localStorage.getItem("mainWndUrlItem")
    // if(typeof savUrl != "string"){
    //     savUrl =  URL_ITEMS_INIT_STATE
    //     localStorage.setItem("mainWndUrlItem", savUrl)
    // }
    // dispatch(setUrlItems(savUrl))
}


