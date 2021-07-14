import React from "react";
import {IItem} from "../types/IItem";
import {GetNameType} from "../types/GetNameType";
import {GetNameStatus} from "../types/GetNameStatus";
import {GetNameCategory} from "../types/GetNameCategory";
import {GetNameUnit} from "../types/GetNameUnit";
import ItemService from "../services/ItemService";
import {BsTrashFill} from  "react-icons/bs";

let items: IItem[];
items = require("../NEW_node.json");

interface  PropsItem {
    items: IItem[];
}

export class NodeTable extends React.Component<{}, PropsItem> {

    constructor(props: PropsItem) {
        super(props);
        this.state = {items:[]}
    }

    componentDidMount(){
        ItemService.getItemDtoListName().then((response) => {
            this.setState({items: response.data})
        });}

    render(){
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
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    this.state.items.map(
                        item =>
                            <tr key={item.key}>
                                <td><input type="checkbox" /></td>
                                <td id="numRight">{item.key}</td>
                                <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                                <td id="numRight">{item.d1}</td>
                                <td><GetNameUnit name={item.unit} /></td>
                                <td id="numRight">{item.d2}</td>
                                <td><BsTrashFill title="delete" /></td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        )}
}
