import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/images/logo.png"

export default function Navbar({ navref }) {
    // navbar responsive function
    const [navactive, setNavactive] = useState(false);

    // mobile menu functions 

    const showNav = () => {
        setNavactive(true);
        navref.current.classList.add("sidebar_active");
    }

    const hideNav = () => {
        setNavactive(false);
        navref.current.classList.remove("sidebar_active");
    }

    // get user name & img in Item in local storage
    const userName = localStorage.getItem("userName");
    const userImg = localStorage.getItem("imgUrl");

    // darkMode

    const darkBody = () => {
        document.body.classList.toggle("darkMode");
    }

    // Navbar
    return (
        <>
            <nav id='navbar'>
                <div className="logo"> {/* Brand logo */}
                    <img className='logo__brand' src={logo} alt="logo" />
                    <div className="logo__search">
                        <Link to="/messages"><i class="fa-solid fa-magnifying-glass"></i> search</Link>
                    </div>
                </div>

                <div className="user"> {/* User account */}
                    <h2 className='user__name'>{userName ? userName : "Your Name"}</h2>
                    <img className="user__image" src={userImg ? userImg : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" />

                    {!navactive ?
                        <i onClick={showNav} id='menu' class="fa-solid fa-bars"></i>
                        :
                        <i onClick={hideNav} id='closeMenu' class="fa-solid fa-xmark"></i>
                    }

                </div>
            </nav>

            <i onClick={darkBody} id="darkMode" class="fa-solid fa-circle-half-stroke"></i>
        </>
    )
}
