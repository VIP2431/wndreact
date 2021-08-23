import React, {useEffect, useState} from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../services/GetNameType";
import ItemService from "../../services/ItemService";

const TableBlock = () => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
        ItemService.getNodeTypeList().then((response) => {
            setItems( response.data);})}, []);

    const headsTable = [ "Flag", "N", "Title"];

    return (
        <table className="itemLine">
            <thead>
                <tr>
                    { headsTable.map((item) =>
                        <th key={item}>{item}</th>
                    )}
                </tr>
            </thead>
            <tbody>{ items.map((item:IItem) => {
                return (
                  <tr key={item.key} onClick={() => localStorage.setItem("blockWndC", "TableRoomA")}>
                      <td><input type="checkbox" /></td>
                      <td id="numRight">{item.key}</td>
                      <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                 </tr>
            )})}
            </tbody>
        </table>
    );
}

export default TableBlock;