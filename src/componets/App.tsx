import React from "react";
import { BrowserRouter as Router, Switch,} from "react-router-dom";
import PageMain from "../page/main/PageMain";
import PageBuh from "../page/buh/PageBuh";
import {EPageBrand} from "../menu/MenuBrand";

const App: React.FC = () => {

    const name = localStorage.getItem(EPageBrand.CURRENT_HOME)
    const page = (name !== null && name !== undefined) ? name : EPageBrand.PAGE_MAIN
    console.log("App page=" + page);

    return (
        <Router>{console.log("App return")};
            <Switch>
            {
                (page === EPageBrand.PAGE_BUH) ? <PageBuh />
                        : <PageMain />
            }
            </Switch>
        </Router>
      )
};

export default App;

