import {DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";

const MenuList: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => { // = () => {

    return (
        <DropdownButton  className="mx-3 w-auto" title="MenuList" id="dropdown-button-drop-end" variant="secondary">
            { links.map( p =>
                <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <MenuList links={links} />
        </DropdownButton>
    )
}

export default MenuList;