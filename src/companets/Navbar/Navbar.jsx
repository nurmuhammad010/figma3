import React from 'react';
import { Link } from "react-scroll";
import "./navbar.css"
const Navbar = () => {
 return (
  
 <div className='navbar' id='Navbar'>
     <div className="nav">
        <ul>
        <li>
              <Link activeClass="active" to="card" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="studio" spy={true} smooth={true}>
                 Studios
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="Testimonials" spy={true} smooth={true}>
                Testimonials
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="recent" spy={true} smooth={true}>
                Recent Work
              </Link>
            </li>
            <li>
            <Link activeClass="active" to="Getintouch" spy={true} smooth={true}>
               Get In Touch
              </Link>
            </li>
        </ul>
      </div>   
  </div>
 );
}

export default Navbar;
