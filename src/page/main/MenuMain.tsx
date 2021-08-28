import {Button, Nav} from "react-bootstrap";
import React from "react";
import ListHouse from "../../componets/ListHouse";
import {MenuVariant} from "./MenuVariant";
import {navbarChange} from "../../store/toolkitRedux/navbarSlice";
import {useDispatch} from "react-redux";
import {setUrlItems} from "../../store/toolkitRedux/itemSlice";
import {EUrlApart} from "../../types/IItem";

const MenuMain: React.FC = () => {

    const dispatch = useDispatch();
    const changUrl = (url:string) => {
        dispatch(setUrlItems(url))
     }
    const changNavbar = () => {
        dispatch(navbarChange())
     }

    return (
        <Nav className="mr-auto">{console.log("MenuMain return")}
            <ListHouse />
            <Button variant="secondary" onClick={() => changNavbar()}>Счетчик</Button>
            <Button variant="secondary" onClick={() => changUrl(EUrlApart.ITEM_DTO_NAME_REST_API_URL)}>Объект</Button>
            <Button variant="secondary" onClick={() => changUrl(EUrlApart.NODE_REST_API_URL)}>Блоки</Button>
            <Button variant="secondary" onClick={() => changUrl(EUrlApart.ITEM_REST_API_URL)}>Позиции</Button>
            <Button variant="secondary" onClick={() => localStorage.setItem("currentWndA", "TableRoomA3")}>Объект</Button>
            <Button variant="secondary">Позиции сметы</Button>
            <MenuVariant />
        </Nav>
    );
}

export default MenuMain;