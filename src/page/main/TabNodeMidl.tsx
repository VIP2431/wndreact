import {IItem} from "../../types/IItem";
import React, {FC} from "react";
import {GetNameType} from "../../services/GetNameType";
import {GetNameUnit} from "../../services/GetNameUnit";
import {ITableProps} from "./IPageMain";

export const TabNodeMidl: FC<ITableProps> =
    ({
         items,
         variant,
         children
     }) => {

        return (
            <table key='TabNodeMid' className="table table-hover">{console.log('TabNodeMidl-1')}
                <thead>
                <tr>
                    <th key="N1">N</th>
                    <th key="N2">Наименование</th>
                    <th key="N3">Цена</th>
                    <th key="N4">Ед.изм.</th>
                    <th key="N5">Объем</th>
                </tr>
                </thead>
                <tbody>{items.map( (item:IItem) => {
                    return (
                        <tr key={item.key}>
                            <td id="numRight">{item.key}</td>
                            <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                            <td id="numRight">{item.d1}</td>
                            <td><GetNameUnit name={item.unit} /></td>
                            <td id="numRight">{item.d2}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        )
    }
