import React from "react";
import {ItemTable} from "./ItemTable";
import NavbarSme from "./NavbarSme";
import {Table} from "./Table";
import ItemService from "../services/ItemService";
import {IItem} from "../types/IItem";

interface  PropsItem {
    items: IItem[];
}

export const App: React.FC = () => {

    return<div>
        <div>
            <NavbarSme />
       </div>
     </div>
};
