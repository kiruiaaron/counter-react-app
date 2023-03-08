import React, { Component } from 'react'

//saateless Functional componenst
const navBar = ({totalCounters}) => {
    return ( 
        <nav className='navbar navbar-light bg-light'>

        <a className='navbar-brand' href='#'>Navbar <span className='badge badge-pill badge-secondary'>{totalCounters}</span></a>
        </nav>
    
    
     );
}
 
export default navBar;

