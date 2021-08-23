import React  from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../services/GetNameType";
import {GetNameUnit} from "../../services/GetNameUnit";
import {BsTrashFill} from  "react-icons/bs";

export const TableHome: React.FC<{items: IItem[]}> = ({items}) => {

    return (
        <table className="itemLine">
            <thead>
            <tr>
                <th>Flag</th>
                <th>N</th>
                <th>Name</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Quantity</th>
                <th>TblHome</th>
            </tr>
            </thead>
            <tbody> {items.map( (item:IItem) =>
                <tr key={item.key}>
                    <td><input type="checkbox" /></td>
                    <td id="numRight">{item.key}</td>
                    <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                    <td id="numRight">{item.d1}</td>
                    <td><GetNameUnit name={item.unit} /></td>
                    <td id="numRight">{item.d2}</td>
                    <td><BsTrashFill title="delete" /></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
