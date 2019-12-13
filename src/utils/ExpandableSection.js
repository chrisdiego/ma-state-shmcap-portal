import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExpandableSection = ({id, heading, headingLink, description, src, alt, hazards, interactions, impacts, projections}) => {
    const [expanded, setExpanded] = useState();

    const expandSection = () => {
        setExpanded(!expanded);
    }

    return (
        <Row>
            <Col sm={2}>
                <img className="mw-100" src={src} alt={alt} />
            </Col>
            <Col sm={10}>
                <a className="btn btn-link p-0 text-secondary" href={headingLink} target="_blank" id={id}>
                    <h5 className="text-primary font-weight-bold">{heading}</h5>
                </a>
                <p>{description}</p>
                {expanded ? 
                    <>
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase mb-0">Related Natural Hazards:</h6>
                            {hazards.map((hazard, i) => <Link to={`/highlight/${hazard.link}`} className="text-primary" target="_blank">{hazard.label} {i !== hazards.length - 1 ? "|" : null} </Link>)}
                        </div>
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase mb-0">Other Climate Change Interactions:</h6>
                            {interactions.map((interaction, i) => <a href={interaction.link} className="text-primary" target="_blank">{interaction.label} {i !== interactions.length - 1 ? "|" : null} </a>)}
                        </div>
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase">Representative Climate Change Impacts:</h6>
                            {impacts}
                        </div >
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase">Projections by the end of this century:</h6>
                            <ul className="list-unstyled">
                                {projections.map(projection => <li>- {projection}</li>)}
                            </ul>
                        </div> 
                    </>: null
                }
                    <button className="btn btn-link p-0" onClick={() => expandSection()}>{expanded ? "See Less..." : "Read More..."}</button>
                    <hr />
            </Col>
        </Row>
    );
}

export default ExpandableSection;