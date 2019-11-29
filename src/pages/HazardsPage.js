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
            href: "/hazards#precipitation"
        },
        {
            label: "Sea Level Rise",
            href: "/hazards#seaLevelRise"
        },
        {
            label: "Rising Temperatures",
            href: "/hazards#risingTemperatures"
        },
        {
            label: "Extreme Weather",
            href: "/hazards#extremeWeather"
        },
    ];
    return (
        <>
            <Row className="m-0">
                <PageHeading title="Climate Change is Intensifying Natural Hazards" />
            </Row>
            <Row className="my-5 page-container mx-auto">
                <Col sm={7}>
                    <p>Climate change is already exacerbating natural hazards and extreme weather events, as well as leading to new impacts that will affect the Commonwealth.  The SHMCAP intgrates informatoin and planning elements for 14 natural hazards that oculd affect the Commonwealth of Massachusetts with the following four climate changes: changes in precipitation, sea level rise, rising temperatures, and extreme weather.</p>
                    <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
                    {hazardSections.map(section => <ExpandableSection {...section} />)}
                    <a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A436%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C519%2C0%5D" className="btn btn-primary" target="_blank">Want to know more?</a>
                </Col>
                <Col sm={{span: 4, offset: 1}}>
                    <Toolbox glossary={toolboxData} />
                </Col>
            </Row>
        </>
    );
}

export default HazardsPage;