import React, {useEffect, useState} from "react";
import {IItem} from "../types/IItem";
import ItemService from "../services/ItemService";
import {DropdownButton, NavDropdown} from "react-bootstrap";

const ListHouse = () => { // : React.FC<IListItemProps> = ({items}) => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
        ItemService.getNodeTypeList().then((response) => {
            setItems( response.data);})}, []);

    return (
        <DropdownButton className="drop" title='ListHouse' variant='secondary'>
            { items.map( (p:IItem) =>
                <NavDropdown.Item
                    key={p.key}
                    onClick={() => localStorage.setItem("currentHouse", p.id)}>
                    {p.name}
                </NavDropdown.Item>
            )}
        </DropdownButton>
    )
}

export default ListHouse;