import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu';
import logo from './assets/logo.png';
import './sass/Heading.scss';

const Heading = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className="heading">
            <div className="heading-primary d-flex align-items-center justify-content-between my-3 mx-5">
                <Link className="d-flex align-items-center text-decoration-none" to="/">
                    <img className="mr-3 logo" src={logo} alt="logo" />
                        <div>
                            <h1 className="m-0">
                                <span className="text-secondary">resilient</span>
                                <strong className="orange-text"> MA </strong>
                            </h1>
                            <small className="tagline text-secondary">Climate Change Clearinghouse for the Commonwealth</small>
                        </div>
                </Link>
                <div className="utils d-flex align-items-center">
                    <div className="search mt-2">
                        <FontAwesomeIcon className="mr-2" icon={faSearch}/>
                        <input className="border-0" placeholder="SEARCH" />
                    </div>
                    <div className="menu d-flex flex-column align-items-center">
                        <span className="text-xsmall text-secondary font-weight-bold">MENU</span>
                        <FontAwesomeIcon className="" icon={faBars} size="2x" color="#2B1E76" />
                    </div>
                </div>
            </div>
            <div className="heading-secondary bg-primary text-white pl-5 d-flex align-items-center justify-content-between">
                <h1 className="title m-0">Massachusetts <b>State Hazard Mitigation & Climate Action Plan</b></h1>
                <div className="pr-1 d-flex position-relative">
                <Link to="/full-plan" style={{borderRadius: "0"}} className="btn btn-link text-white nav-item font-weight-bold py-4 text-decoration-none" onClick={() => setActiveMenu(false)}>
                    Full Plan
                    <FontAwesomeIcon className="ml-1" icon={faAngleDown} size="md" />
                </Link>
                <button style={{borderRadius: "0"}} className={`${activeMenu ? "selected" : ""} btn btn-link text-white nav-item font-weight-bold py-4 text-decoration-none`} onClick={() => toggleMenu()}>
                    Plan Highlights
                    <FontAwesomeIcon className="ml-1" icon={faAngleDown} size="md" />
                </button>
                </div>
            </div>
            <div className="nav-menu position-absolute bg-white w-100" style={{zIndex: "1"}}>
                <Menu 
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                /> 
            </div>
        </div>
    );
};

export default Heading;