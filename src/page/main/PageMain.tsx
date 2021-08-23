import React from "react";
import NavbarMain from "../NavbarMain";
import WndMain from "./WndMain";
import WndParam from "./WndParam";
import {EPageBrand} from "../../menu/MenuBrand";

const PageMain = () => {

    localStorage.setItem(EPageBrand.CURRENT_HOME, EPageBrand.PAGE_MAIN)

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
                    <WndParam />
                </aside>
            </main>
            <footer className='wnd-footer'>
                 Footer
            </footer>
        </div>
    )
}

export default PageMain;