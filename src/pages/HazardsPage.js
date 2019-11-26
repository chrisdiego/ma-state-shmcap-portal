import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeading from '../utils/PageHeading';
import ExpandableSection from '../utils/ExpandableSection';
import { hazardSections } from '../data.js';
import Toolbox from '../utils/Toolbox';

const HazardsPage = () => {
    const toolboxData = [
        {
            label: "Changes in Precipitation",
            href: ""
        },
        {
            label: "Sea Level Rise",
            href: ""
        },
        {
            label: "Rising Temperatures",
            href: ""
        }
    ];
    return (
        <>
            <Row>
                <PageHeading title="Climate Change is Intensifying Natural Hazards" />
            </Row>
            <Row className="m-5">
                <Col sm={7}>
                    <p>Climate change is already exacerbating natural hazards and extreme weather events, as well as leading to new impacts that will affect the Commonwealth.  The SHMCAP intgrates informatoin and planning elements for 14 natural hazards that oculd affect the Commonwealth of Massachusetts with the following four climate changes: changes in precipitation, sea level rise, rising temperatures, and extreme weather.</p>
                    <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
                    {hazardSections.map(section => <ExpandableSection {...section} />)}
                    <Link to="/placeholder" className="btn btn-primary">Want to know more?</Link>
                </Col>
                <Col sm={{span: 4, offset: 1}}>
                    <Toolbox glossary={toolboxData} />
                </Col>
            </Row>
        </>
    );
}

export default HazardsPage;