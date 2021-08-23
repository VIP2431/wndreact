import React from 'react'
import {Navbar} from 'react-bootstrap'
import MenuBrand from "../menu/MenuBrand";
import MenuMain from "./main/MenuMain";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavbarMain: React.FC = () =>  {

    const {navbar} = useTypedSelector(state => state.navbar);

    return (
        <Navbar bg="secondary" variant="dark">
            {console.log("NavbarMain return cash=" + navbar + "-------------")}
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

export default NavbarMain;