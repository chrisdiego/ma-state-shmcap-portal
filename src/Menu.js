import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { highlightFacets } from './data.js'
import { Link } from 'react-router-dom';
import Chevron from './utils/Chevron.js';
import './sass/Menu.scss';

const FacetGroup = ({group}) => {
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
        <Col xs={4}>
            <li className="mb-3">
                <div className="border-bottom border-primary facetGroupTitle d-flex mb-1" onClick={toggleCollapse}>
                    <h6 className="m-0 text-left text-secondary font-weight-bold">{group.facetGroupTitle}</h6>
                    <Chevron className={setRotate} width={15} fill={"#2B1E76"} />
                </div>
                <div className={`${setActive} facetGroupList`} ref={facetGroupContent} style={{ maxHeight: `${setHeight}` }}>
                    {group.facets.map(facet => (
                        <a className="d-block text-secondary" href={facet.link}>{facet.title}</a>
                    ))}
                </div>
            </li>
        </Col>
    );
}

const menuContent = (menu) => {
    if(menu === "highlights")
        return (
            <>
                <Col xs={3}>
                    <ul className="list-unstyled text-secondary font-weight-bold mx-5">
                        <li className="mb-4"><Link to="/hazards" className="text-secondary">Climate change is intensifying natural hazards</Link></li>
                        <li className="mb-4"><Link to="/risks" className="text-secondary">Risk and Vulnerabilities the Commonwealth Faces</Link></li>
                        <li className="mb-4"><Link to="/capabilities" className="text-secondary">Current Capabilities and Adaptability</Link></li>
                    </ul>
                </Col>
                <Col xs={6} className="text-center pt-5" style={{backgroundColor: "#F2F2F2"}}>
                    <h3 className="text-secondary font-weight-bold mb-4 text-left ml-5">View Plan Highlights by</h3>
                    <ul className="list-unstyled">
                        <Row className="px-5">
                            {highlightFacets.map(group => (
                                <FacetGroup group={group} />
                            ))}
                        </Row>
                    </ul>
                </Col>
                <Col xs={3} className="text-primary">
                    <h3 className="m-0 font-weight-bold">Implementation</h3>
                    <i>Putting the plan to work</i>
                    <ul className="text-secondary list-unstyled font-weight-bold my-4">
                        <li>Our Strategy</li>
                        <li>Resilient MA Action Team</li>
                        <li>SHMCAP Action Tracker</li>
                        <li>Glossary</li>
                    </ul>
                    <a className="text-uppercase border-top border-primary d-block">Download Full Plan</a>
                    <a className="text-uppercase border-top border-bottom border-primary d-block">Download Executive Summary</a>
                </Col>
            </>
        );
    else if (menu === "plan")
        return (
            <div>testing</div>
        );
    else 
        return null
}

const Menu = ({activeMenu}) => {
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
           <Transition in={activeMenu !== ""} timeout={300}>
                {state => (
                    <Row className="shadow align-items-center m-0" style={{...defaultStyle, ...transitionStyles[state]}}>
                        {menuContent(activeMenu)}
                    </Row>
                )}
           </Transition>
    );
};

export default Menu;