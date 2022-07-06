import React, {useContext} from 'react';

import {UnorderedList} from "../../functionalComponents/UnorderedList";
import {AuthContext} from "../../../context/AuthContextProvider";

import {FiLogOut} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {NavigationItem} from "../../functionalComponents/NavigationItem";


function NavItems(props) {

    const {isAuth, logout} = useContext(AuthContext);

    const toggleLinks = () => props.isMobile && props.closeMobileNav();

    return (

        <UnorderedList className='nav-menu'>
            {isAuth ?
                <>
                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/"
                        title="Home"
                    />
                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/recipes"
                        title="Recipe Search"
                    />
                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/profile"
                        title=""
                    >
                        <CgProfile size="35px"/>
                    </NavigationItem>
                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/signin"
                        title=""
                    >
                        <FiLogOut size="30px"
                                  className="logout"
                                  onClick={logout}
                        />
                    </NavigationItem>

                </>
                :
                <>

                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/"
                        title="Home"
                    />

                    <NavigationItem
                        clickHandler={toggleLinks}
                        path="/signin"
                        title="Sign in"
                    />
                </>
            }
        </UnorderedList>
    );
}

export default NavItems;