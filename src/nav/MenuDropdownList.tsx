import {Dropdown, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuList from "./MenuList";
import MenuListB from "./MenuListB";

const MenuDropdownList: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => { // = () => {

    return (
        <DropdownButton title="MenuDropdownList" variant='secondary'>
            <MenuListB links={links} />
            { links.map( p =>
                <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <MenuDropdownList links={links} />
            <NavDropdown.Divider />
            <Dropdown.Header><b>Заголовок Меню</b></Dropdown.Header>
            <MenuList links={links} />
       </DropdownButton>
    )
}

export default MenuDropdownList;