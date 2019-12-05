//Packages
import React, { useState } from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PDFLink from '../utils/PDFLink';
import PageLayout from './PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

//Assets
import { highlightsPageData } from '../data.js'


const Sector = ({ title, description }) => {
    const [expanded, toggleExpanded] = useState(false);

    return (
        <div style={{borderRadius: "5px"}} className="border py-2 px-3 mt-3 bg-white" onClick={() => toggleExpanded(!expanded)}>
            <h5 className="d-inline-block">{title}</h5>
            <FontAwesomeIcon icon={expanded ? faCaretDown : faCaretRight} style={{right: "30px"}} className="d-inline-block position-absolute" size="2x" color="#2B1E76" />
            {expanded ? <p className="mt-4">{description}</p> : null}
        </div>
    );
}

const HighlightsPage = ({ match }) => {
    const toolboxData = [
        {
            label: "Hazard Profile",
            href: `${match.url}#profile`
        },
        {
            label: "Potential Effects of Climate Change",
            href: `${match.url}#effects`
        },
        {
            label: "Exposure and Vulnerability by Key Sector",
            href: `${match.url}#exposure`
        },
    ];

    const {
        type,
        description,
        knowMoreLink,
        hazardProfile,
        details,
        effects,
        sectors,
        sectorLink
    } = highlightsPageData[match.params.hazard];

    return (
        <PageLayout title={type} toolboxData={toolboxData}>   
            <p>{description}</p>
            <PDFLink pdf="plan" page={knowMoreLink} className="btn btn-primary mt-3">Want to know more?</PDFLink>
            <hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
            <h5 className="text-secondary font-weight-bold my-4" id="profile">HAZARD PROFILE</h5>
            <ul>
                {
                    hazardProfile.map(item => 
                        <li className="mt-2">
                            <PDFLink pdf="plan" page={item.href} className="btn btn-link p-0">{item.label}</PDFLink>
                        </li>
                    )
                }
            </ul>
            <Row className="mt-5">
                {
                    details.map(detail =>
                        <Col sm={4} className="px-1 d-flex flex-column align-items-stretch">
                            <h5 className="bg-secondary text-white font-weight-bold py-3 px-2 mb-0">{detail.title}</h5>
                            <p style={{background: "whitesmoke"}} className="p-3 h-100">{detail.description}</p>
                        </Col>    
                    )
                }
            </Row>
            <Row>
                <Col sm={6} className="px-1">
                    <h5 className="bg-secondary text-white font-weight-bold py-3 px-2 mb-0" id="effects">POTENTIAL EFFECTS OF CLIMATE CHANGE</h5>
                    <Row>
                        {
                            effects.images.map(image => 
                                <Col xs={4}>
                                    <img className="p-4 mw-100" style={{maxWidth: "160px"}}src={image.src} alt={image.label} />
                                    <p className="px-4">{image.label}</p>    
                                </Col>
                            )
                        }
                    </Row>
                        {
                            effects.entries.length ? effects.entries.map(entry => 
                                <>
                                    <h5 className="text-secondary font-weight-bold my-4">{entry.title}</h5>
                                    <p>{entry.description}</p>
                                </>
                            ) : <h5 className="text-center mt-5">This report does not identify any effects of climate change on the earthquake hazard in Massachusetts.</h5>
                        }
                </Col>
                <Col sm={6} className="px-1" style={{backgroundColor: "whitesmoke"}}>
                    <h5 className="bg-secondary text-white font-weight-bold py-3 px-2 mb-0" id="exposure">EXPOSURE & VULNERABILITY BY KEY SECTOR</h5>
                    <div className="p-3">
                        {sectors.map(sector => <Sector title={sector.title} description={sector.description} />)}
                    </div>
                    <PDFLink pdf="plan" page={sectorLink} className="btn btn-primary mx-3 my-4">Want to know more?</PDFLink>
                </Col>
            </Row>
        </PageLayout>
    );
}

export default HighlightsPage;