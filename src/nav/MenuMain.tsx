import {Nav} from "react-bootstrap";
import React from "react";
import MenuDropdown from "./MenuDropdown";
import MenuDropdownA from "./MenuDropdownA";
import MenuDropdownList from "./MenuDropdownList";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";

const MenuMain = () => {

    const links: ITypeLinkMenu[] = [
        {'link': 'items','name': 'ItemsMenu'}
        ,{'link': 'nodes','name': 'NodesMenu'}
        ,{'link': 'blocks','name': 'BlocksMenu'}
        ,{'link': 'node','name': 'NodeMenu'}
        ,{'link': 'items','name': 'ItemsMenu2'}
        ,{'link': 'nodes','name': 'NodesMenu2'}
        ,{'link': 'blocks','name': 'BlocksMenu2'}
        ,{'link': 'node','name': 'NodeMenu2'}
    ]

    return (
        <Nav className="mr-auto">
            <MenuDropdownList links={links}/>
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="items">Позиции сметы</Nav.Link>
            <Nav.Link href="nodes">Nodes</Nav.Link>
            <Nav.Link href="node">Объект</Nav.Link>
            <Nav.Link href="blocks">Блоки работ</Nav.Link>
            <MenuDropdown  links={links}/>
            <MenuDropdownA links={links}/>
        </Nav>
    );
}

export default MenuMain;