import React from "react";
import {IListItemProps} from "../types/IListItemProps";
import {TypeName} from "../types/TypeName";


export const Table: React.FC<IListItemProps> = ({items}) => {
    return (
        <table className="itemLine">
            <thead>
            <tr>
                <th>Flag</th>
                <th>N</th>
                <th>Type</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
                {items.map( item => {
                    return (
                        <tr key={item.name}>
                            <td><input type="checkbox" /></td>
                            <td>{item.key}</td>
                            <td id="numLeft2"><TypeName nmType={item.type} /></td>
                            <td id="numLeft">{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><i className="material-icons red-text"> delete</i></td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}
