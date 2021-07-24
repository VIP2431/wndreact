import React, {useEffect, useState} from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../types/GetNameType";
import {GetNameUnit} from "../../types/GetNameUnit";
import ItemService from "../../services/ItemService";
import {BsTrashFill} from  "react-icons/bs";

export const TableBlock = () => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
        ItemService.getNodeTypeList().then((response) => { setItems( response.data);})
    }, []);

        const headsTable = [ "Flag", "N", "Title", "Price", "Unit", "Quantity", "TableBlock"];

    return (
        <table className="itemLine">
            <thead>
            <tr>
                { headsTable.map((item) => <th>{item}</th>)}
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
