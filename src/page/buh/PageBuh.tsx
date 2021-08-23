import React from "react";
import NavbarMain from "../NavbarMain";
import {TableItem} from "../../componets/table/TableItem";
import {EPageBrand} from "../../menu/MenuBrand";

const PageBuh: React.FC = () => {

    localStorage.setItem(EPageBrand.CURRENT_HOME, EPageBrand.PAGE_BUH)

    return (
        <div className="wnd-app">{console.log("PageMain-1")}
            <header className='wnd-header'>
                <NavbarMain />
            </header>
            <main className='wnd-main'>
                <div className='wnd-home'>
                    <h3>Смета=={localStorage.getItem("currentWndC")}</h3>
                </div>
                <section className='wnd-param'>
                    <h3>Параметры</h3>
                    <TableItem />
                </section>
            </main>
            <footer className='wnd-footer'>
                Footer
            </footer>
        </div>
    )
}

export default PageBuh;
