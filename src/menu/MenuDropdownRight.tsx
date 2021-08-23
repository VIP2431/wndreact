import {NavDropdown} from "react-bootstrap";
import React from "react";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";

const MenuDropdownRight = () => {

    const links: ITypeLinkMenu[] = [
        {'link': 'items','name': 'ItemsMenu'}
        ,{'link': 'nodes','name': 'NodesMenu'}
        ,{'link': 'blocks','name': 'BlocksMenu'}
        ,{'link': 'node','name': 'NodeMenu'}
        ,{'link': 'items','name': 'ItemsMenu2'}
        ,{'link': 'nodes','name': 'NodesMenu2'}
        ,{'link': 'blocks','name': 'BlocksMenu2'}
        ,{'link': 'node','name': 'NodeMenu2'}
    ];

    return (
        <div  className="btn-group dropend">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Объекты Right1
            </button>
            <ul className="dropdown-menu">
            { links.map( p => {
                return (
                    <li><a className="dropdown-item" href={p.link}>{p.name}</a></li>
                );})}

            </ul>
        </div>
    )
}

export default MenuDropdownRight;

    // <NavDropdown className="dropdown-menu" title="Объекты Right1" >
    //     <NavDropdown.Item href="items">ItemsRight</NavDropdown.Item>
    //     <NavDropdown.Item href="nodes">NodesRight</NavDropdown.Item>
    //     <NavDropdown.Item href="blocks">BlocksRight</NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item href="node">ObjectRight</NavDropdown.Item>
    // </NavDropdown>
