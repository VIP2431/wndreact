import React from "react";
import NavbarMain from "../NavbarMain";
import WndMain from "./WndMain";
import {EPageBrand} from "../../menu/MenuBrand";
import {useDispatch} from "react-redux";
import {URL_ITEMS_INIT_STATE, VARIANT_WND_MAIN_INIT_STATE} from "./IPageMain";
import {setVariant} from "../../store/toolkitRedux/navbarSlice";
import { setUrlItems} from "../../store/toolkitRedux/itemSlice";

const PageMain: React.FC = () => {

    localStorage.setItem(EPageBrand.CURRENT_HOME, EPageBrand.PAGE_MAIN)

    const dispatch = useDispatch();

    let savVariant = localStorage.getItem("mainWndVariant")
    if(typeof savVariant != "string"){
        savVariant =  VARIANT_WND_MAIN_INIT_STATE
        localStorage.setItem("mainWndVariant", savVariant)
    }
    dispatch(setVariant( savVariant))

    let savUrl = localStorage.getItem("mainWndUrlItem")
    if(typeof savUrl != "string"){
        savUrl = URL_ITEMS_INIT_STATE
        localStorage.setItem("mainWndUrlItem", savUrl)
    }
    dispatch(setUrlItems(savUrl))

    return (
         <div className="container-fluid">{console.log('PageMain return *****')}
            <header className='wnd-header'>
                <NavbarMain />
            </header>

            <WndMain />

            <footer className='wnd-footer'>
                Footer
            </footer>
        </div>
    )
}

export default PageMain;
