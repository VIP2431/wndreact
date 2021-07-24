import {Route, Switch} from "react-router-dom";
import {Home} from "../componets/Home";
import {TableItem} from "../componets/Table/TableItem";
import {TableNode} from "../componets/Table/TableNode";
import {TableBlock} from "../componets/Table/TableBlock";
import {Table} from "../componets/Table/Table";
import React from "react";
import MenuDropdownA from "../nav/MenuDropdownA";
import MenuDropdownList from "../nav/MenuDropdownList";
import {ITypeLinkMenu} from "../types/ITypeLinkMenu";
import MenuListA from "../nav/MenuListA";
import MenuList from "../nav/MenuList";
import {TableRoom} from "../componets/Table/TableRoom";


const PageMain = () => {

    const links: ITypeLinkMenu[] = [
        {'link': 'items','name': 'ItemsMenu'}
        ,{'link': 'nodes','name': 'NodesMenu'}
        ,{'link': 'blocks','name': 'BlocksMenu'}
        ,{'link': 'node','name': 'NodeMenu'}
        ,{'link': 'items','name': 'ItemsMenu2'}
        ,{'link': 'nodes','name': 'NodesMenu2'}
        ,{'link': 'blocks','name': 'BlocksMenu2'}
        ,{'link': 'node','name': 'NodeMenu2'}
    ];

    return(
        <div className="container">
            <Switch>
                <Route exact path="/"><TableRoom title="TableRoom" /></Route>
                <Route path="/items"><TableItem /></Route>
                <Route path="/node"><TableNode /></Route>
                <Route path="/nodes"><TableBlock /></Route>
                <Route path="/blocks"><Table /></Route>
                <Route path="/menuA"><MenuDropdownA links={links}/></Route>
                <Route path="/menuDropdownList"><MenuDropdownList links={links}/></Route>
                <Route path="/menuListA"><MenuListA links={links} /></Route>
                <Route path="/menuList"><MenuList links={links}/></Route>
            </Switch>
        </div>
    )
}

export default PageMain;