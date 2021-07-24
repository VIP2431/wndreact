import React, {useEffect, useState} from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../types/GetNameType";
import {GetNameUnit} from "../../types/GetNameUnit";
import ItemService from "../../services/ItemService";
import {BsTrashFill} from  "react-icons/bs";

export const TableItem = () => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
    ItemService.getItems().then((response) => { setItems( response.data);})
    }, []);

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
                <th>TableItem</th>
            </tr>
            </thead>
            <tbody>{ items.map((item:IItem) => {
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
    );
}
