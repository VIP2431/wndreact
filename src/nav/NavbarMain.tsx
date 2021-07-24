import React from 'react'

import {
    BrowserRouter as Router,
} from "react-router-dom";

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavbarBrand} from 'react-bootstrap'
import {Home} from '../componets/Home';
import {BsSearch} from  "react-icons/bs";
import MenuMain from "./MenuMain";
import PageMain from "../Page/PageMain";

export default function NavbarMain() {

    return (
       <div className="row">
           <div className="col-md-12">
               <Router>
                   <Navbar bg="secondary" variant="dark">
                       <NavbarBrand href="/">Смета-WndReact</NavbarBrand>
                       <Navbar.Toggle aria-controls="basic-navbar-nav" />
                       <Navbar.Collapse id="basic-navbar-nav">

                           <MenuMain />

                       </Navbar.Collapse>
                       <Form className="d-flex">
                           <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
                           <Button><BsSearch /></Button>
                       </Form>
                   </Navbar>

                   <PageMain />

               </Router>
           </div>
       </div>
    );
}