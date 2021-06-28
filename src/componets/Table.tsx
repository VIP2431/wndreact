import React from "react";
import {GetNameType} from "../types/GetNameType";
import {GetNameStatus} from "../types/GetNameStatus";
import {GetNameCategory} from "../types/GetNameCategory";
import {GetNameUnit} from "../types/GetNameUnit";
import {IItem} from "../types/IItem";


export const Table: React.FC<{items: IItem[]}> = ({items}) => {
    return (
        <table className="itemLine">
            <thead>
            <tr>
                <th>Flag</th>
                <th>N</th>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
                {items.map( item => {
                    return (
                        <tr key={item.name}>
                            <td><input type="checkbox" /></td>
                            <td id="numRight">{item.key}</td>
                            <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                            <td><GetNameStatus name={item.status} /></td>
                            <td><GetNameCategory name={item.category} /></td>
                            <td id="numRight">{item.price}</td>
                            <td><GetNameUnit name={item.unit} /></td>
                            <td id="numRight">{item.quantity}</td>
                            <td><i className="material-icons red-text"> delete</i></td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}
