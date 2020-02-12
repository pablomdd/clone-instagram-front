import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
//TODO creat "./Routes.js"
import Routes from "./Routes"

import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import './index.css';


ReactDOM.render(
    //add Routes.js here below
    <Router>
        <Routes/>
    </Router>,   
    document.getElementById('root')
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
