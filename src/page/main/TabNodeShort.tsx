import {IItem} from "../../types/IItem";
import React, {FC} from "react";
import {GetNameType} from "../../services/GetNameType";
import {ITableProps} from "../../types/IMain";

export const TabNodeShort: FC<ITableProps> =
    ({
         items,
         variant,
         children
     }) => {

        return (
            <table className="table table-hover">{console.log('TabNodeShort return')}
                <thead>
                <tr>
                    <th key="N1">N</th>
                    <th key="N2">Наименование</th>
                    <th key="N3">Цена</th>
                </tr>
                </thead>
                <tbody>{items.map( (item:IItem) => {
                    return (
                        <tr key={item.key}>
                            <td id="numRight">{item.key}</td>
                            <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                            <td id="numRight">{item.d1}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        )
    }
