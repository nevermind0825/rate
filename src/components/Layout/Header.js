import React from 'react';
import Navbar from './Navbar/Navbar';
import NavBarDrawer from './Navbar/NavBarDrawer';
import NavbarStatic from './Navbar/NavbarStatic';
import ApplyNowFloat from '../HomeComponents/ApplyNowFloat/ApplyNowFloat';



const Header = () => {
    return (

        // <header className='position-relative' style={{minHeight:"60px"}}>
            <header className='position-relative' style={{minHeight:"3rem"}}>
            {/* <Navbar></Navbar> */}
            <ApplyNowFloat/>
            <NavbarStatic/>
            {/* <NavBarDrawer /> */}
        </header>
    );
};

export default Header;