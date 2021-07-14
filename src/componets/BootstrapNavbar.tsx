import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                        <Nav.Link href="/contact-us">About Us</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form className="form-inline my-2 my-lg-0">
                                        <FormControl className="form-control mr-sm-2" type="text" placeholder="Поиск" />
                                        <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />Поиск
                            <Switch>
                                <Route exact path="/">
                                    "<Home />"
                                </Route>
                                <Route path="/">
                                    "<Home />"
                                </Route>
                                <Route path="/">
                                    "<Home />"
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;