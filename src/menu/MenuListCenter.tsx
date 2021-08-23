import { DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";


export const MenuListCenter: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
            <DropdownButton className="mx-3 w-auto" variant="secondary" title="MenuListCenter">
                    { links.map( p =>
                        <NavDropdown.Item href={p.link}>{p.name}</NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <MenuListCenter links={links} />
           </DropdownButton>
    );
}

export  default MenuListCenter;