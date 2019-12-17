import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu';
import Search from './utils/Search';
import ResilientMAHeader from './ResilientMAHeader';
import logo from './assets/logo.png';
import './sass/Heading.scss';

const Heading = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const isFramed = () => {
      return true; //(window.location !== window.parent.location);
    }
    const toggleMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className="heading">
            <ResilientMAHeader />
            <div className="heading-secondary bg-primary text-white pl-sm-5 pt-3 pt-sm-0 text-center text-sm-left d-flex align-items-center justify-content-between flex-column flex-sm-row">
                <Link to="/" className="text-white">
                    <h1 className="title m-0">Massachusetts <b>State Hazard Mitigation & Climate Adaptation Plan</b></h1>
                </Link>
                <div className="pr-1 d-flex position-relative flex-column flex-sm-row">
                    <Link to="/full-plan" style={{borderRadius: "0"}} className="btn btn-link text-white nav-item font-weight-bold px-4 pb-sm-4 pt-4 text-decoration-none" onClick={() => setActiveMenu(false)}>
                        Full Plan
                    </Link>
                    <button style={{borderRadius: "0"}} className={`${activeMenu ? "selected" : ""} btn btn-link text-white nav-item font-weight-bold py-4 text-decoration-none`} onClick={() => toggleMenu()}>
                        Plan Highlights
                        <FontAwesomeIcon className="ml-1" icon={faAngleDown} />
                    </button>
                </div>
            </div>
            <div className="nav-menu position-sm-absolute bg-white w-100" style={{zIndex: "1"}}>
                <Menu
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>
        </div>
    );
};

export default Heading;
