import React from "react";
import {IListItemProps} from "../types/IListItemProps";
import {GetNameType} from "../types/GetNameType";


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
                                <div>{item.d1}</div>
                                <div>{item.d2}</div>
                                <div><GetNameType name={item.type}  item={item} /></div>
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