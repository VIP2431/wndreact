import {Button, Nav} from "react-bootstrap";
import React from "react";
import ListHouse from "../../componets/ListHouse";
import {ITypeLinkMenu} from "../../types/ITypeLinkMenu";
import {useDispatch} from "react-redux";
import {MenuVariant} from "./MenuVariant";
import {ENavbarActionTypes} from "../../store/reducers/navbarReducer";

const MenuMain: React.FC = () => {

    const dispatch = useDispatch();
    const changNavbar = () => {
        localStorage.setItem("currentWndC", "tbC-123")
        console.log("MenuMain addCash ++++++++++++++++++")
        dispatch({type: ENavbarActionTypes.RENDER_NAVBAR, payload: 1})
     }

    return (
        <Nav className="mr-auto">{console.log("MenuMain return")}
            <ListHouse />
            <Button variant="secondary" onClick={() => changNavbar()}>ГлавнаяB</Button>
            <Button variant="secondary" onClick={() => localStorage.setItem("currentWndC", "tbC")}>ГлавнаяC</Button>
            <Button variant="secondary" onClick={() => localStorage.setItem("currentWndA", "TableRoomA3")}>Объект</Button>
            <Button variant="secondary">Позиции сметы</Button>
            <MenuVariant />
        </Nav>
    );
}

export default MenuMain;