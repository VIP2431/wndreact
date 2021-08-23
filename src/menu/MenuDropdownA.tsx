import {DropdownButton, NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuListLift from "./MenuListLift";

const MenuDropdownA = (props: any) => { //: React.FC<{links: ITypeLinkMenu[]}> = ({links}) => {

    return (
        <DropdownButton title="MenuDropdownA" variant="secondary">
            { props.links.map( (p:ITypeLinkMenu) =>
                <NavDropdown.Item key={p.name} href={p.link}>{p.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <MenuListLift links={props.links} />
        </DropdownButton>
    )
}

export default MenuDropdownA;