import React from "react";
import {NameUnit} from "../types/NameUnit"

export const GetNameUnit: React.FC<{name: string}> = ({name}) => {

    return (
        <>
            {(name === "UN_METER_2")? NameUnit.UN_METER_2
                :(name === "UN_METER_LINE")? NameUnit.UN_METER_LINE
                    :(name === "UN_METER_3")? NameUnit.UN_METER_3
                        :(name === "UN_METER_2")? NameUnit.UN_KG
                            :(name === "UN_LITRE")? NameUnit.UN_LITRE
                                :(name === "UN_HOUR")? NameUnit.UN_HOUR
                                    :(name === "UN_STEP")? NameUnit.UN_STEP
                                        :(name === "UN_THING")? NameUnit.UN_THING
                                            :(name === "UN_TIME")? NameUnit.UN_TIME
                                                :(name === "UN_NOT")? NameUnit.UN_NOT
                                                    : "UN_NOT"}
        </>
    )
}
