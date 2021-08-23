import React from 'react'
import {Navbar} from 'react-bootstrap'
import MenuBrand from "../../menu/MenuBrand";
import MenuMain from "../main/MenuMain";

const NavbarBuh = () =>  {

    return (
        <Navbar bg="secondary" variant="dark">
            <MenuBrand />
            <div className="col-md-8">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <MenuMain />
                </Navbar.Collapse>
            </div>
         </Navbar>
     );
}

export default NavbarBuh;