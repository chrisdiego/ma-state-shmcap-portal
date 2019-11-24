import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeading from '../utils/PageHeading';
import ExpandableSection from '../utils/ExpandableSection';
import { hazardSections } from '../data.js';

const HazardsPage = () => {
    return (
        <>
            <Row>
                <PageHeading title="Climate Change is Intensifying Natural Hazards" />
            </Row>
            <Row className="m-5">
                <Col sm={8}>
                    <p>Climate change is already exacerbating natural hazards and extreme weather events, as well as leading to new impacts that will affect the Commonwealth.  The SHMCAP intgrates informatoin and planning elements for 14 natural hazards that oculd affect the Commonwealth of Massachusetts with the following four climate changes: changes in precipitation, sea level rise, rising temperatures, and extreme weather.</p>
                    <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
                    {hazardSections.map(section => <ExpandableSection {...section} />)}
                   
                </Col>
                <Col sm={4}>

                </Col>
            </Row>
        </>
    );
}

export default HazardsPage;