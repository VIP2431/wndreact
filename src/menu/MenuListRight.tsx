import {Button, ButtonGroup, DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuListCenter from "./MenuListCenter";

const MenuListRight: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <DropdownButton className="dropend" variant="secondary" title="MenuListRight">
            { links.map( p =>
                <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <MenuListCenter links={links} />
        </DropdownButton>
    )
}

export default MenuListRight;