import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";
import {Home} from "../componets/Home";
import {TableItem} from "../componets/Table/TableItem";
import {TableNode} from "../componets/Table/TableNode";
import {TableBlock} from "../componets/Table/TableBlock";
import {Table} from "../componets/Table/Table";
import React from "react";
import MenuG from "./MenuG";

export default function NavMain() {

    return (
        <Router>

            <nav>
                <div className="nav-wrapper blue-grey">
                    <a href="#" className="brand-logo">Смета</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/node">Объекты</a></li>
                        <li><a href="/nodes">Комнаты</a></li>
                        <li><a href="/blocks">Блоки работ</a></li>
                        <li><a href="/"><MenuG />MenuG</a></li>
                        <li><a href="/blocks">Блоки работ</a></li>
                        <li><a href="/items">Уставки</a></li>

                    </ul>
                </div>
            </nav>
            <div className="container">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/items"><TableItem /></Route>
                    <Route path="/node"><TableNode /></Route>
                    <Route path="/nodes"><TableBlock /></Route>
                    <Route path="/blocks"><Table /></Route>
                </Switch>
            </div>
        </Router>
    );
}