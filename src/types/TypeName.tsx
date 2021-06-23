import React from "react";

enum NameType {
    TYPE_ITEM = "Позиция сметы",
    TYPE_BLOCK = "Блок",
    TYPE_ROOM = "Комната",
    TYPE_HOUSE = "Объект"
}

export const TypeName: React.FC<{nmType: string}> = ({nmType}) => {

    return (
       <>
           {(nmType === "TYPE_ITEM")? "Позиция"
              : (nmType === "TYPE_BLOCK")? NameType.TYPE_BLOCK
                 :(nmType === "TYPE_ROOM")? "Комната"
                   :(nmType === "TYPE_HOUSE")? NameType.TYPE_HOUSE : "Not_Type"}
       </>
    )
}
