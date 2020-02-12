import React from "react"
import {Route} from "react-router-dom"

//TODO create Home, Login
import Home from "./views/Home"
import Login from "./views/Login"

function Routes(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </>
    );
}

export default Routes;