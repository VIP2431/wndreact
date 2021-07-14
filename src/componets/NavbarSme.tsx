import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavbarBrand} from 'react-bootstrap'
import Home from './Home';
import {BsSearch} from  "react-icons/bs";
import {ItemTable} from "./ItemTable";
import { Table } from './Table';
import {BlockTable} from "./BlockTable";
import {NodeTable} from "./NodeTable";

class NavbarSme extends React.Component{
    render() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar bg="primary" variant="dark">
                            <NavbarBrand href="/">Смета-WndReact</NavbarBrand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="items">Позиции сметы</Nav.Link>
                                <Nav.Link href="nodes">Nodes</Nav.Link>
                                <Nav.Link href="node">Объект</Nav.Link>
                                <Nav.Link href="blocks">Блоки работ</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/items">Items</NavDropdown.Item>
                                    <NavDropdown.Item href="nodes">Nodes</NavDropdown.Item>
                                    <NavDropdown.Item href="blocks">Blocks</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/node">Object</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                            <Form className="d-flex">
                                <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
                                <Button><BsSearch /></Button>
                            </Form>
                        </Navbar>
                        <br />
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/items">
                                    <ItemTable />
                                </Route>
                               <Route exact path="/node">
                                    <NodeTable />
                                </Route>
                               <Route exact path="/nodes">
                                    <BlockTable />
                                </Route>
                                <Route exact path="/blocks">
                                    <Table />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );}
}

export default NavbarSme;