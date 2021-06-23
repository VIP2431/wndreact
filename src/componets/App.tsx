import React from "react";
import Navbar from "./Navbar";
import {List} from "./List";
import {IItem} from "../types/IItem";
import {Table} from "./Table";

export const App: React.FC = () => {

    let items: IItem[];
    items = require("../NEW_node.json");

    return <div>
        <div>
            <Navbar />
        </div>
        <div className="container">
            <Table items={items} />
        </div>
      </div>
};
