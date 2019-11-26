import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ExpandableSection = ({heading, description, src, alt, hazards, interactions, impacts, projections}) => {
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
                <button className="btn btn-link p-0 text-secondary" onClick={() => expandSection()}>
                    <h5 className="text-secondary font-weight-bold">{heading}</h5>
                </button>
                <p>{description}</p>
                {expanded ? 
                    <>
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase mb-0">Related Natural Hazards:</h6>
                            {hazards.map((hazard, i) => <span className="text-primary">{hazard} {i !== hazards.length - 1 ? "|" : null} </span>)}
                        </div>
                        <div className="mb-3">
                            <h6 className="font-weight-bold text-uppercase mb-0">Other Climate Change Interactions:</h6>
                            {interactions.map((interaction, i) => <span className="text-primary">{interaction} {i !== interactions.length - 1 ? "|" : null} </span>)}
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