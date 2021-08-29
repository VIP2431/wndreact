import React, {useEffect, useState} from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../services/GetNameType";
import {GetNameUnit} from "../../services/GetNameUnit";
import ItemService from "../../services/ItemService";


export const TableItem: React.FC = () => {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        ItemService.getItems().then((response) => {
            setItems( response.data );})}, []);

    return (
        <table className="itemLine">{console.log("TableItem return =========")}
            <thead>
            <tr>
                <th key="c1">Flag</th>
                <th key="c2">N</th>
                <th key="c3">Name</th>
                <th key="c4">Price</th>
                <th key="c5">Unit</th>
            </tr>
            </thead>
            <tbody>{items.map((item: IItem) => {
                return (
                    <tr key={item.id}>
                        <td><input type="checkbox"/></td>
                        <td>{item.key}123</td>
                        <td id="numLeft"><GetNameType name={item.type} item={item}/></td>
                        <td id="numRight">{item.d1}</td>
                        <td><GetNameUnit name={item.unit}/></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}
