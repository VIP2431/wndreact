import {IItem} from "../../types/IItem";
import React, {FC} from "react";
import {GetNameType} from "../../services/GetNameType";
import {ETableVariant, ITableProps} from "./IPageMain";
import {useDispatch} from "react-redux";
import {setVariant} from "../../store/toolkitRedux/navbarSlice";
import {setItemA, setItemB} from "../../store/toolkitRedux/itemSlice";

export const TabNodeShort: FC<ITableProps> =
    ({
         items,
         variant,
         children
     }) => {

        const dispatch = useDispatch();
        const setA = (key:number) =>   dispatch(setItemA( key))
        const setB = (key:number) =>  dispatch(setItemB( key))


        return (
            <table key='TabNodeShort' className="table table-hover">{console.log('TabNodeShort return')}
                <thead>
                <tr>
                    <th key="N1">N</th>
                    <th key="N2">Наименование</th>
                    <th key="N3">Цена</th>
                    <th key="N4">A</th>
                    <th key="N5">B</th>
                </tr>
                </thead>
                <tbody>{items.map( (item:IItem) => {
                    return (
                        <tr key={item.key}>
                            <td id="numRight">{item.key}</td>
                            <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                            <td id="numRight">{item.d1}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => setA(item.key)}
                                    className="btn btn-outline-dark btn-sm">
                                    A
                                </button></td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => setB(item.key)}
                                    className="btn btn-outline-dark btn-sm">
                                    B
                                </button></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        )
    }
