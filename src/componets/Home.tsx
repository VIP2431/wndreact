import React, {useEffect, useState} from "react";
import ItemService from "../services/ItemService";
import {TableHome} from "./Table/TableHome";

export const Home = () => {

    const [ items, setItems ] = useState([] );

    useEffect(() => {
        ItemService.getNodeTypeList().then((response) => { setItems( response.data);})
    }, []);

    return <TableHome items = {items} />
}
