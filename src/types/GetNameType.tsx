import React from "react";
import {NameType} from "./NameType"
import {TableRoom} from "../componets/TableRoom";
import {IItem} from "./IItem";

export const GetNameType: React.FC<{name: string, item: IItem}> = ({name,item}) => {

    return (
       <>
           {(name === "TYPE_ITEM")? <i>{item.title}</i>
              : (name === "TYPE_BLOCK")? <b> -- {item.title}</b>
                 :(name === "TYPE_ROOM")? <b> *** {item.title} ***</b>
                    :(name === "TYPE_HOUSE")? <b> ### <TableRoom title={item.title} /> ###</b>
                        :(name === "TYPE_SUM")? "Итоги"
                            :(name === "TYPE_COM")? NameType.TYPE_COM
                                : "Not_Type"}
       </>
    )
}
