import React from "react";
import NavbarMain from "../NavbarMain";
import WndMain from "./WndMain";
import WndParam from "./WndParam";
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
         <div className="wnd-app">{console.log('PageMain return *****')}
            <header className='wnd-header'>
                <NavbarMain />
            </header>
            <main className='wnd-main'>
                <div className='wnd-home'>
                    <WndMain />
               </div>
                <aside className='wnd-param'>
                    <div className='wnd-section'>
                        <h2>Edit</h2>
                    </div>
                     <div className='wnd-section-2'>
                        <WndParam />
                    </div>

                </aside>
            </main>
            <footer className='wnd-footer'>
                 Footer
            </footer>
        </div>
    )
}

export default PageMain;