import React from "react";
import {TableRoom} from "../componets/table/TableRoom";
import {IItem} from "../types/IItem";

export const GetNameType: React.FC<{name: string, item: IItem}> = ({name,item}) => {

    return (
       <>
           {(name === "TYPE_ITEM")? <i> - Item - {item.name}</i>
             :(name === "TYPE_BLOCK")? <b>{item.name}</b>
             :(name === "TYPE_ROOM")? <b> *** Room *** {item.name} ***</b>
             :(name === "TYPE_HOUSE")? <b> ### Object ### <TableRoom title={item.title} /> ###</b>
             :(name === "TYPE_SUM")? " ++ Итоги ++"
             :(name === "TYPE_COM")? " ++ {NameType.TYPE_COM} ++"
             : "Not_Type"}
       </>
    )
}
