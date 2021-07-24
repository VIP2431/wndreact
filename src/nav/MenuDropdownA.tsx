import {DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuList from "./MenuList";


const MenuDropdownA: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <DropdownButton title="MenuDropdownA" id="dropdown-button-drop-end" variant="secondary">
            { links.map( p =>
                <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <MenuList links={links} />
        </DropdownButton>
    )
}

export default MenuDropdownA;