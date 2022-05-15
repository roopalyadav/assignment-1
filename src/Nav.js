import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav(props) {
    const { setParam, searchParam } = props;
    const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const handleChange = (e) => {
      e.preventDefault();
      setParam(e.target.value);
  }
    return (
        <div className={`nav ${show && "nav_black" }`}>
            <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
        <input type="text" value={searchParam} placeholder="Search" id="search" className="search" onChange={handleChange}></input>
        </div>
    )
}

export default Nav