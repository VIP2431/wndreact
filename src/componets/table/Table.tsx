import React, { useState, useEffect } from "react";
import {GetNameType} from "../../services/GetNameType";
import {GetNameUnit} from "../../services/GetNameUnit";
import {IItem} from "../../types/IItem";
import ItemService from "../../services/ItemService";
import {BsTrashFill} from "react-icons/bs";

export const Table = () => { //: React.FC<{items: IItem[]}> = ({items}) => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
        ItemService.getNodeTypeList().then((response) => { setItems( response.data);})
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
                    <th>Table</th>
                </tr>
            </thead>
            <tbody>
            { items.map( (item:IItem) => {
                return (
                    <tr key={item.name}>
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

