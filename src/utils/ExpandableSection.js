import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ExpandableSection = ({heading, description, src, alt}) => {
    return (
        <Row>
            <Col sm={2}>
                <img className="mw-100" src={src} alt={alt} />
            </Col>
            <Col sm={10}>
                <h5 className="text-secondary text-decoration-underline font-weight-bold">{heading}</h5>
                <p>{description}</p>
                <h6 className="font-weight-bold text-uppercase">Related Natural Hazards:</h6>
                <h6 className="font-weight-bold text-uppercase">Other Climate Change Interactions:</h6>
                <h6 className="font-weight-bold text-uppercase">Representative Climate Change Impacts:</h6>
                <h6 className="font-weight-bold text-uppercase">Projections by the end of this century:</h6>
                <hr />
            </Col>
        </Row>
    );
}

export default ExpandableSection;