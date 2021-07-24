import React from "react";
import {IItem} from "../../types/IItem";
import {GetNameType} from "../../types/GetNameType";
import {GetNameUnit} from "../../types/GetNameUnit";
import ItemService from "../../services/ItemService";
import {BsTrashFill} from  "react-icons/bs";

// let items: IItem[];
// items = require("../NEW_node.json");

interface  PropsItem {
    items: IItem[];
}

export class TableNode extends React.Component<{}, PropsItem> {

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
            <table className="table table-hover table-bordered ">
                <thead>
                <tr>
                    <th>Flag</th>
                    <th>N</th>
                    <th>Наименование</th>
                    <th>Цена</th>
                    <th>Ед.изм.</th>
                    <th>Объем</th>
                    <th>TableNode</th>
                </tr>
                </thead>

                <tbody> {this.state.items.map( item =>
                    <tr key={item.key}>
                        <td><input type="checkbox" /></td>
                        <td id="numRight">{item.key}</td>
                        <td id="numLeft"><GetNameType name={item.type} item={item} /></td>
                        <td id="numRight">{item.d1}</td>
                        <td><GetNameUnit name={item.unit} /></td>
                        <td id="numRight">{item.d2}</td>
                        <td><BsTrashFill title="delete" /></td>
                    </tr>)}
                </tbody>

            </table>
        )}
}
