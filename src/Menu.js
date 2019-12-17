import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { highlightFacets } from './data.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser';
import Chevron from './utils/Chevron.js';
import summary from './assets/pdf/SHMCAP_executive_summary.pdf';
import plan from './assets/pdf/SHMCAP-September2018-Full-Plan-web.pdf';
import './sass/Menu.scss';

const FacetGroup = ({group, setActiveMenu}) => {
    const [setActive, setActiveState] = useState("active");
    const [setHeight, setHeightState] = useState("200px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const facetGroupContent = useRef(null);

    const toggleCollapse = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
          setActive === "active" ? "0px" : `${facetGroupContent.current.scrollHeight}px`
        );
        setRotateState(
          setActive === "" ? "accordion__icon" : "accordion__icon rotate"
        );
      }

    return (
        <Col sm={4} className="px-2">
            <li className="mb-3">
                <div className="border-bottom border-primary facetGroupTitle d-flex mb-1" style={{minHeight: "35px"}} onClick={toggleCollapse}>
                    <h6 className="m-0 text-left text-secondary font-weight-bold">{ReactHtmlParser(group.facetGroupTitle)}</h6>
                    <Chevron className={setRotate} width={15} fill={"#2B1E76"} />
                </div>
                <div className={`${setActive} facetGroupList`} ref={facetGroupContent} style={{ maxHeight: `${setHeight}` }}>
                    {group.facets.map(facet => (
                        <Link className="d-block text-secondary" to={facet.link} onClick={() => setActiveMenu(false)}>{facet.title}</Link>
                    ))}
                </div>
            </li>
        </Col>
    );
}

const menuContent = (menu, setActiveMenu) => {
    if(menu)
        return (
            <>
                <Col sm={3}>
                    <ul className="list-unstyled text-secondary font-weight-bold mx-5 mt-4 mt-sm-0 text-center pt-5">
                        <li className="text-left mb-4">
                            <Link to="/" onClick={() => setActiveMenu(false)}>
                                <FontAwesomeIcon className="mr-5" style={{color: "#2B1E76"}} icon={faHome} size={"3x"}/>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/hazards" className="text-secondary" onClick={() => setActiveMenu(false)}>Climate Change is Intensifying Natural Hazards</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/risks" className="text-secondary" onClick={() => setActiveMenu(false)}>Risks and Vulnerabilities the Commonwealth Faces</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/capabilities" className="text-secondary" onClick={() => setActiveMenu(false)}>Current Capabilities and Adaptability</Link>
                        </li>
                    </ul>
                </Col>
                <Col sm={6} className="text-center pt-5" style={{backgroundColor: "#F2F2F2"}}>
                    <h3 className="text-center text-sm-left text-secondary font-weight-bold mb-4 text-left ml-sm-5">View Plan Highlights by</h3>
                    <ul className="list-unstyled">
                        <Row className="px-5">
                            {highlightFacets.map(group => (
                                <FacetGroup group={group} setActiveMenu={setActiveMenu} />
                            ))}
                        </Row>
                    </ul>
                </Col>
                <Col sm={3} className="text-primary my-4 my-sm-0 text-center text-sm-left pt-5">
                    <h3 className="m-0 font-weight-bold">Implementation</h3>
                    <i>Putting the plan to work</i>
                    <ul className="text-secondary list-unstyled font-weight-bold my-4 text-center">
                        <li>
                            <Link to="/our-strategy" className="text-secondary" onClick={() => setActiveMenu(false)}>Our Strategy</Link>
                            </li>
                        <li>
                            <Link to="/action-team" className="text-secondary" onClick={() => setActiveMenu(false)}>Resilient MA Action Team</Link>
                            </li>
                        <li>
                            <a className="text-secondary" href="http://ma-state-action-tracker.s3-website-us-east-1.amazonaws.com/#/" target="_blank">SHMCAP Action Tracker</a>
                            </li>
                        <li>
                            <Link to="/acronyms" className="text-secondary" target="" onClick={() => setActiveMenu(false)}>Acronyms</Link>
                        </li>
                    </ul>
                    <a href={plan} download className="text-uppercase border-top border-primary d-block text-center">Download Full Plan</a>
                    <a href={summary} download className="text-uppercase border-top border-bottom border-primary d-block text-center">Download Executive Summary</a>
                </Col>
            </>
        );
    else
        return null
}

const Menu = ({activeMenu, setActiveMenu}) => {
    const defaultStyle = {
        transition: "opacity 200ms ease-in-out",
        opacity: 0,
      }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
      };
    return (
           <Transition in={activeMenu} timeout={300}>
                {state => (
                    <Row className="shadow m-0" style={{...defaultStyle, ...transitionStyles[state]}}>
                        {menuContent(activeMenu, setActiveMenu)}
                    </Row>
                )}
           </Transition>
    );
};

export default Menu;
