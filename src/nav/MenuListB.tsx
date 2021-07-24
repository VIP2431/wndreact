import {Button, ButtonGroup, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuList from "./MenuList";

const MenuListB: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
            <DropdownButton className="mx-3 dropend" variant="secondary" title="MenuListB1234567">
                    { links.map( p =>
                        <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <MenuListB links={links} />
           </DropdownButton>
    )
}

export default MenuListB;