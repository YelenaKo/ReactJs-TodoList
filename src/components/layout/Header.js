import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header style={headerStyle} >
            <h1>TodoList</h1>
            <Link to= {'/'} style={linkStyle} className="header-nav" >Home</Link>
            <Link to= { '/about'} style={linkStyle} className="header-nav">About</Link> 

        </header>
    )
}

const headerStyle = {
    background: '#22356b',
    color:'#fff',
    textAlign: 'center',
    padding:'10px'
}

const linkStyle = {
    textDecoration: 'none'
}

export default Header;
