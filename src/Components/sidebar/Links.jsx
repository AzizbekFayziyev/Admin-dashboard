import React from 'react'
import { NavLink } from 'react-router-dom'

const dropdown = function (e) {
    e.target.parentElement.classList.toggle("dropdown-active");
}

// sidebar menu links
export default function Links() {
    return (
        <>
            <li className='nav-item'>
                <NavLink className='nav-link' to="/"><i class="fa-solid fa-chart-pie"></i> Overwiev</NavLink>
            </li>

            <li onClick={dropdown} className='nav-item'>
                <a className='nav-link' href="#"><i class="fa-solid fa-file-lines"></i> Pages  <i class="fa-solid fa-angle-down"></i></a>

                <ul className='d-flex flex-column'>
                    <NavLink to={"/gsdgdszf"}>Page 404</NavLink>
                </ul>
            </li>

            <li onClick={dropdown} className='nav-item'>
                <a className='nav-link' href="#"><i class="fa-solid fa-cart-shopping"></i> Sales   <i class="fa-solid fa-angle-down"></i></a>

                <ul className='d-flex flex-column'>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </ul>
            </li>

            <li className='nav-item'>
                <NavLink className='nav-link position-relative' to="/messages"><i class="fa-solid fa-message"></i> Messages
                    <span className="badge bg-success rounded-pill position-absolute top-20 start-100 translate-middle">1</span>
                </NavLink>
            </li>

            <li onClick={dropdown} className='nav-item'>
                <a className='nav-link' href="#"><i class="fa-solid fa-bag-shopping"></i> Authentications <i class="fa-solid fa-angle-down"></i></a>

                <ul className='d-flex flex-column'>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </ul>
            </li>

            <div className='bottom'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/docs"><i class="fa-solid fa-book"></i> Docs</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/components"><i class="fa-solid fa-cubes"></i> Components</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/help"><i class="fa-solid fa-circle-info"></i> Help</NavLink>
                </li>

            </div>
        </>
    )
}
