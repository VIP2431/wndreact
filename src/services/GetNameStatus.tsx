import React from "react";
import {NameStatus} from "../types/NameStatus"

export const GetNameStatus: React.FC<{name: string}> = ({name}) => {

    return (
        <>
            {(name === "STAT_PUBLIC")? NameStatus.STAT_PUBLIC
                :(name === "STAT_NO_MACH")? NameStatus.STAT_NO_MACH
                    :(name === "STAT_NO_VISIBLE")? NameStatus.STAT_NO_VISIBLE
                          : "Not_Type"}
        </>
    )
}
