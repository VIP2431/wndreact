import {IItem} from "../../types/IItem";
import React, {FC, useEffect, useState} from "react";
import {GetNameType} from "../../services/GetNameType";
import {GetNameUnit} from "../../services/GetNameUnit";
import {BsTrashFill} from "react-icons/bs";
import {ITableProps} from "../../types/IMain";

export const TabNodeFull: FC<ITableProps> =
    ({
         items,
         variant,
         children
    }) => {

    return (
        <table className="table table-hover">{console.log('TabNodeFull-1')}
            <thead>
            <tr>
                <th key="Flag">Flag</th>
                <th key="N1">N</th>
                <th key="N2">Наименование</th>
                <th key="N3">Цена</th>
                <th key="N4">Ед.изм.</th>
                <th key="N5">Объем</th>
                <th key="N6">TableNode</th>
            </tr>
            </thead>
            <tbody>{items.map( (item:IItem) => {
                return (
                    <tr key={item.key}>
                        <td><input type="checkbox" /></td>
                        <td id="numRight">{item.key}</td>
                        <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                        <td id="numRight">{item.d1}</td>
                        <td><GetNameUnit name={item.unit} /></td>
                        <td id="numRight">{item.d2}</td>
                        <td><BsTrashFill title="delete" /></td>
                    </tr>
                )})}
            </tbody>
        </table>
    )
}
