import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout(props){
    return(
        <>
            <Navbar></Navbar>
            <main className="container">
                {props.children}
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;