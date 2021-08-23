import {Button, Dropdown, DropdownButton, Nav} from "react-bootstrap";
import React from "react";
import {IMenuBrand} from "../types/IMenuBrand";

export enum EPageBrand {
    CURRENT_HOME = 'currentHome',
    PAGE_MAIN = 'page-main',
    PAGE_BUH = 'page-buh',
}

const menu: IMenuBrand[] = [
    { title: 'PageMain', url: EPageBrand.PAGE_MAIN, id: 1 }
   ,{ title: '_PageBuh', url: EPageBrand.PAGE_BUH, id: 2 }
]

const MenuBrand = () => {

    const name = localStorage.getItem(EPageBrand.CURRENT_HOME);
    const url = (typeof(name) === 'string') ? name : EPageBrand.PAGE_MAIN
    let id = menu.findIndex( item => item.url === url)
    id = (id >= 0 && id <= menu.length) ? id : 0
    const title = menu[id].title

    const setPage = (url: string) => {
        localStorage.setItem(EPageBrand.CURRENT_HOME, url)
    }

    return (
       <>
           <div className="col-md-1">
                <DropdownButton className="drop" variant="secondary" title={<b>{title}</b>}>
                    { menu.map( (p) =>
                        <Nav.Link
                            className="menu-item"
                            key={p.id}
                            href={p.url}
                            onClick={() => setPage(p.url)}>
                            <Button variant="secondary">{p.title}</Button>
                        </Nav.Link>
                    )}
                </DropdownButton>
            </div>
        </>
    )
}

export default MenuBrand;

// <div className="col-md-1 title-brand">
//     <NavbarBrand>{title}</NavbarBrand>
// </div>
