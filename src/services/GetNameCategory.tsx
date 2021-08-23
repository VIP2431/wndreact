import React from "react";
import {NameCategory} from "../types/NameCategory"

export const GetNameCategory: React.FC<{name: string | undefined}> = ({name}) => {

    return (
        <>
            {(name === "CTG_WORK")? NameCategory.CTG_WORK
                : (name === "CTG_MATERIAL")? NameCategory.CTG_MATERIAL
                    :(name === "CTG_SERVICE")? NameCategory.CTG_SERVICE
                        :(name === "CTG_TOOLS")? NameCategory.CTG_TOOLS
                            :(name === "CTG_SUM")? NameCategory.CTG_SUM
                                :(name === "CTG_COM")? NameCategory.CTG_COM
                                    :(name === "CTG_NOT")? NameCategory.CTG_NOT
                                        : "CTG_NOT"}
        </>
    )
}
