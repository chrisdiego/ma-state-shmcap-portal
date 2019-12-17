import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PDFLink from '../utils/PDFLink';
import cover from '../assets/shmcap-cover.jpg';
import graph from '../assets/index-graph.png';
import EOPSSlogo from '../assets/EOPSSlogo.png';
import memalogo from '../assets/mema_logo.jpg';
import eealogo from '../assets/eea-sm.jpg';

const IndexPage = () => {
    return (
        <>
            <Row className="m-0">
                <Col className="p-0">
                    <img className="mw-100" src={cover} alt="placeholder image"/>
                </Col>
            </Row>
            <Row className="mx-auto page-container mt-4">
                <Col>
                    <h2 className="text-secondary">A First-of-its-Kind Integrated State Plan</h2>
                </Col>
            </Row>
            <Row className="mx-auto page-container mt-2 mb-5">
                <Col sm={8}>
                    <p>In the face of climate change, it is critical to build long-term resilience throughout Massachusetts by leveraging historical risk data and integrating that data with projected future climate conditions. The <b>2018 State Hazard Mitigation and Climate Adaptation Plan (SHMCAP)</b> expands upon the previous planning efforts of the Commonwealth’s 2013 State Hazard Mitigation Plan and the 2011 Massachusetts Climate Change Adaptation Report. It accounts for projected changes in precipitation, temperature, sea-level rise, and extreme weather events to position the Commonwealth to effectively reduce the risks associated with natural hazards and the effects of climate change.</p>
                    <p>This innovative plan encompasses the results of a multi-step planning process with a robust outreach and engagement program to incorporate diverse stakeholders across the Commonwealth in all phases of plan development, including identification of risks and vulnerabilities as well as goal setting and action development. The planning process was managed through a close partnership among the Executive Office of Energy and Environmental Affairs (EOEEA), the Executive Office of Public Safety and Security (EOPSS), and the Massachusetts Emergency Management Agency (MEMA), and involved a Project Management Team composed of technical specialists from several key state agencies.</p>
                    <hr style={{borderWidth: "medium", borderColor: "green", opacity: "0.3"}} className="my-4" />
                    <h5 className="text-secondary font-weight-bold font-italic">SHMCAP Mission Statement</h5>
                    <p>Reduce the statewide loss of life, and protect natural resources, property, infrastructure, public health, and the economy from natural hazards and climate change impacts through the development of a comprehensive and integrated hazard mitigation and climate adaptation program.</p>
                    <hr style={{borderWidth: "medium", borderColor: "green", opacity: "0.3"}} className="my-4" />
                    <h5 className="text-secondary font-weight-bold mb-3">The SHMCAP</h5>
                    <ul>
                        <li><p>Acknowledges that climate change is already worsening natural hazards and extreme weather events and integrates information and planning elements for 14 natural hazards that affect the Commonwealth</p></li>
                        <li><p>Incorporates the best scientific data and projections available to assess risk and vulnerability associated with natural hazards and a changing climate for five key sectors - populations, government, built environment, natural resources and environment, and economy.</p></li>
                        <li><p>Evaluates the Commonwealth's existing capabilities to implement agency-specific and statewide hazard mitigation and climate adaptation activities to reduce risk and increase resilience.</p></li>
                        <li><p>Establishes a strategy for implementation and continued evolution of the plan to incorporate new information and data as they become available as well as engage relevant stakeholders.</p></li>
                    </ul>
                    <Row className="align-items-center">
                        <Col sm={3}>
                            <img className="mw-100" src={EOPSSlogo} alt="EOPSS logo"/>
                        </Col>
                        <Col sm={3}>
                            <img className="mw-100 m-auto d-block" src={eealogo} alt="Mass DOT logo"/>
                        </Col>
                        <Col sm={3}>
                            <img className="mw-100" src={memalogo} alt="Labor logo"/>
                        </Col>
                    </Row>
                    <PDFLink page="" pdf="summary" className="btn btn-primary ml-4 mt-4">Learn More</PDFLink>
                </Col>
                <Col sm={4}>
                    <img className="mw-100 d-block m-auto" src={graph} alt="Graph"/>
                </Col>
            </Row>
        </>
    );
};

export default IndexPage;