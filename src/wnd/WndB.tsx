import {Route, Switch} from "react-router-dom";
import React from "react";
import {TableRoomA} from "../componets/table/TableRoomA";

const WndB = () => {
    return (
        <Switch>
            <Route exact path="/B"><TableRoomA /></Route>
        </Switch>
    )
}

export default WndB;
