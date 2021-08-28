import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './App.scss';
import App  from './componets/App';
//import {store} from "./store/reducers";
import {store} from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
