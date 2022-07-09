import React, {useContext, useState} from 'react';

import NavItems from "../NavItems";
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';


function MobileNavigation(props) {

    const [open, setOpen] = useState(false);

    function closeMobileNav() {
        setOpen(false);
    }
    function toggleHamburgerMenu() {
        setOpen(!open);
    }

    const hamburgerMenu = <AiOutlineMenu className="hamburger"
                                         size="40px" color="#cfdbd5"
                                         onClick={toggleHamburgerMenu}
    />
    const closedMenu = <AiOutlineClose className="hamburger"
                                       size="40px" color="#cfdbd5"
                                       onClick={toggleHamburgerMenu}
    />

    return (
        <nav className="mobile-navigation">
            {open ? closedMenu : hamburgerMenu}
            {open && <NavItems isMobile={true} closeMobileNav={closeMobileNav}/>}
        </nav>
    );
}

export default MobileNavigation;