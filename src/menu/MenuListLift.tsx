import {Button, ButtonGroup, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuListCenter from "./MenuListCenter";
import MenuListRight from "./MenuListRight";

const MenuListLift: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <DropdownButton className="dropstart" variant="secondary" title="MenuListLift">
    { links.map( p =>
            <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
        )}
    <NavDropdown.Divider />
    <MenuListRight links={links} />
    </DropdownButton>
)
}

export default MenuListLift;