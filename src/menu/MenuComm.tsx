import {Nav} from "react-bootstrap";
import React from "react";
import MenuDropdown from "./MenuDropdown";
import MenuDropdownList from "./MenuDropdownList";

const MenuComm = (props: any) => {

    return (
        <Nav className="mr-auto">
            <MenuDropdownList links={props.links}/>
            <Nav.Link href="/A" onClick={() => localStorage.setItem("currentWndA", "TableRoomA")}>
                ГлавнаяA
            </Nav.Link>
            <Nav.Link href="/B" onClick={() => localStorage.setItem("currentWndB", "tbB")}>
                ГлавнаяB
            </Nav.Link>
            <Nav.Link href="/C" onClick={() => localStorage.setItem("currentWndC", "tbC")}>
                ГлавнаяC
            </Nav.Link>
            <Nav.Link href="blocks" onClick={() => localStorage.setItem("currentWndA", "TableRoomA2")}>
                Блоки
            </Nav.Link>
            <Nav.Link href="node" onClick={() => localStorage.setItem("currentWndA", "TableRoomA3")}>
                Объект
            </Nav.Link>
            <Nav.Link href="items">Позиции</Nav.Link>
            <Nav.Link href="nodes">Nodes</Nav.Link>

            <MenuDropdown  links={props.links} />
        </Nav>
    );
}

export default MenuComm;