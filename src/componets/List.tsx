import React from "react";
import {IListItemProps} from "../types/IListItemProps";
import {TypeName} from "../types/TypeName";


export const List: React.FC<IListItemProps> = ({items}) => {

     return (
        <ul className="itemLine">
            { items.map( item => {
                return (
                  <li  key={item.name}>
                    <label>
                        <input type="checkbox" />
                        <span>
                            <b>
                                <div>{item.key}</div>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div>{item.quantity}</div>
                                <div><TypeName nmType={item.type} /></div>
                            </b>
                        </span>
                        <i className="material-icons red-text"> delete</i>
                    </label>
                </li>
               )
            })}
        </ul>
    )
}