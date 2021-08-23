import {Dropdown, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuListRight from "./MenuListRight";

const MenuDropdownList: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => { // = () => {

    return (
        <DropdownButton title="MenuDropdownList" variant='secondary'>
            { links.map( p =>
                <NavDropdown.Item key={p.name} href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <Dropdown.Header><b>Заголовок Меню</b></Dropdown.Header>
            <MenuListRight links={links} />
       </DropdownButton>
    )
}

export default MenuDropdownList;