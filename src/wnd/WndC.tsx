import React from "react";
import {TableRoomA} from "../componets/table/TableRoomA";
import {TableRoomA3} from "../componets/table/TableRoomA3";
import {TableRoomA2} from "../componets/table/TableRoomA2";

const WndC = () => {

    const CurrTableWndC02 = () => <>{TableRoomA3}</>

    const CurrTableWndC: any = () => {
        const wnd = localStorage.getItem("blockWndC");
        return (( wnd === "TableRoomA" ) ? TableRoomA : TableRoomA2);
    }

    return <><CurrTableWndC /></>
}

export default WndC;