import {Button, Dropdown, DropdownButton, Nav, NavbarBrand, NavDropdown} from "react-bootstrap";
import React from "react";
import {IMenuBrand} from "../types/IMenuBrand";
import {useDispatch} from "react-redux";
import {ETableVariant} from "../types/IMain";
import {ENavbarActionTypes} from "../store/reducers/navbarReducer";

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
    const url = (name !== null && name !== undefined) ? name : EPageBrand.PAGE_MAIN
    const id = menu.findIndex( item => item.url === url);
    const i = (id >= 0) ? id : 0
    const title = menu[i].title

    const setPage = (url: string) => {
        localStorage.setItem(EPageBrand.CURRENT_HOME, url)
    }

    return (
       <>
           <div className="col-md-1">
                <DropdownButton className="drop" variant="secondary" title={<b>{title}</b>}>
                    { menu.map( (p) =>
                        <Nav.Link
                            key={p.id}
                            href={p.url}
                            onClick={() => setPage(p.url)}>
                            <Button>{p.title}</Button>
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
