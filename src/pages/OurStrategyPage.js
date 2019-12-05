//Packages
import React from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PageLayout from './PageLayout';
import PDFLink from '../utils/PDFLink';

//Assets
import solutions from '../assets/natureBasedSolutions.PNG';
import actionTrackerImage from '../assets/actionTracker.png';
import strategyImage1 from '../assets/strategy-image1.jpg';

const OurStrategyPage = () => {
	const toolboxData = [
		{
			label: "SHMCAP Goals",
			href: "/our-strategy#shmcapGoals"
		},
		{
			label: "About SHMCAP Action Tracker",
			href: "/our-strategy#about"
        },
        {
			label: "Importance of Nature-Based Solutions in Hazard Mitigation and Climate Adaptation",
			href: "/our-strategy#nbs"
		}
	];
	return (
		<PageLayout title="Our Strategy" toolboxData={toolboxData}>
			<h3 id="shmcapGoals" className="text-secondary mb-5">SHMCAP Goals</h3>
            <Row className="align-items-center">
			   <Col sm={6}>
				<img className="mw-100" src={strategyImage1} alt="SHMCAP Goals" />
			   </Col>
			   <Col sm={6}>
				<p>The SHMCAP's strategy to address risks and vulnerabilities from natural hazards and climate change impacts, is guided by a mission statement and five goals, and includes a series of specific hazard mitigation and climate adaptation actions.  The process to develop these actions included extensive stakeholder engagement, reference to strategies and actions identified in local hazard mitigation plans, and development of initial actions by the Commonwealth's state agencies and Climate Change Coordinators across all Secretariats.</p>
				<PDFLink page="431" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
			   </Col>
		   </Row>
           <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-5" />
           <h5 id="about" className="text-secondary font-weight-bold my-4">About the SHMCAP Action Tracker</h5>
           <p>State agencies identified over 100 initial priority actions to increase resilince and overcome the Commonwealth's risks and vulnerabilitles related to natural hazards and projected climate changes.  The State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) actions can be sorted and viewed in multiple ways.  The tracker is maintained by the State and contains a list of actions identified through the 2018 SHMCAP planning process as well as through the ongoing SHMCAP implementation process led by the Resilience Massachusetts Action Team (RMAT). Included are "global" actions that are intended to reduce risk across State government and the Commonwealth.  All actions address at least one of the primary climate change interactions and associated climate change impacts identified in the risk assessment.  Each action includes specific details, such as completion time frame, lead agency, agency priority score, and possible funding sources.</p>
           <a href="http://ma-state-action-tracker.s3-website-us-east-1.amazonaws.com/#/" target="_blank">
		   	<img className="mw-100" src={actionTrackerImage} alt="Resilient MA Action Tracker" />
			</a>
           <a href="http://ma-state-action-tracker.s3-website-us-east-1.amazonaws.com/#/" className="btn btn-primary my-4 mr-3" target="_blank">Launch Action Tracker</a>
		   <PDFLink page="434" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
           <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-5" />
           <h5 id="nbs" className="text-secondary font-weight-bold my-4">Importance of Nature-Based Solutions in Hazard Mitigation and Climate Adaptation</h5>
           <img className="mw-100 mb-4" src={solutions} alt="Nature Based Solutions" />
           <p>Nature-based solutions (NBS) are defined as:</p>
           <p>The conservation, enhancement, and restoration of nature to reduce emissions, adaptation, and enhance resiliency.  These types of solutions use natural systems, mimic natural processes, or work in tandem with traditional engineering approaches to address natural hazards like flooding, erosion, drought, and heat islands.</p>
           <p>NBS offers numerous co-benefits, including minimizing costs, improving water quality, and enhancing quality of life.</p>
           <p>NBS should be considered at an ecosystem scale to prioritize the most effective solutions and locations.</p>
		   <p>including minimizing costs, improving water quality, and enhancing quality of life. These co-benefits should also be considered in decision-making.</p>
           <PDFLink page="433" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
		</PageLayout>
	);
}

export default OurStrategyPage;