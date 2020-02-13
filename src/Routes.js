import React from "react"
import {Route} from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
import Profile from "./views/Profile"
import Post from "./views/Post"

function Routes(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/user/:id" component={Profile} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user/:id/:id" component={Profile} />
/        </>
    );
}

export default Routes;