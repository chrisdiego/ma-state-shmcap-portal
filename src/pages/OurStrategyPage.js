import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { Link } from 'react-router-dom';

const OurStrategyPage = () => {
	const toolboxData = [
		{
			label: "SHMCAP Goals",
			href: ""
		},
		{
			label: "About SHMCAP Action Tracker",
			href: ""
        },
        {
			label: "Importance of Nature-Based Solutions in Hazard Mitigation and Climate Adaptation",
			href: ""
		}
	];
	return (
		<>
			<Row>
				<PageHeading title="Our Strategy" />
			</Row>
			<Row className="m-5">
				<Col sm={7}>
                    <Row className="align-items-center">
					   <Col sm={6}>
						<img className="mw-100" src="https://via.placeholder.com/300x500" alt="placeholder image" />
					   </Col>
					   <Col sm={6}>
						<p>The SHMCAP's strategy to address risks and vulnerabilities from natural hazards and climate change impacts, is guided by a mission statement and five goals, and includes a series of secific hazard mitigation and climate adaptation actions.  The process to develop these actions included extensive stakeholder engagement, reference to strategies and actions identified in local hazard mitigation plans, and development of initial actions by the Commonwealth's state agencies and Climate Change Coordinators across all Secretariats.</p>
						<Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
					   </Col>
				   </Row>
                   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-5" />
                   <h5 className="text-secondary font-weight-bold my-4">About SHMCAP Action Tracker</h5>
                   <p>State agencies identified over 100 initial priority actions to increase resilince and overcome the Commonwealth's risks and vulnerabilitles related to natural hazards and projected climate changes.  The State Hazard Mitigation and Climate Adaptation Plan (SHMCAP) actions can be sorted and viewed in multiple ways.  The tracker is maintained by the State and contains a list of actions identified through the 2018 SHMCAP planning process as well as through the ongoing SHMCAP implementation process led by the Resilience Massachusetts Action Team (RMAT). Included are "global" actions that are intended to reduce risk across State government and the Commonwealth.  All actions address at least one of the primary climate change interactions and associated climate change impacts identified in the risk assessment.  Each action includes specific details, such as completion time frame, lead agency, agency priority score, and possible funding sources.</p>
                   <img className="mw-100" src="https://via.placeholder.com/1000x1200" alt="placeholder image" />
                   <Link to="/placeholder" className="btn btn-primary my-4 mr-3">Launch Action Tracker</Link>
                   <Link to="/placeholder" className="btn btn-primary my-4">Learn More</Link>
                   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-5" />
                   <h5 className="text-secondary font-weight-bold my-4">Importance of Nature-Based Solutions in Hazard Mitigation and Climate Adaptation</h5>
                   <img className="mw-100 mb-4" src="https://via.placeholder.com/1000x400" alt="placeholder image" />
                   <p>Nature-based solutions (NBS) are defined as:</p>
                   <p>The conservation, enhancement, and restoration of nature to reduce emissions, adaptation, and enhance resiliency.  These types of solutions use natural systems, mimic natural processes, or work in tandem with traditional engineering approaches to address natural hazards like flooding, erosion, drought, and heat islands.</p>
                   <p>Nature-based solutions offer numerous co-benefits, including minimizing costs, improving water quality, and enhancing quality of life.  These co-benefits should laso be considered in decision-making.</p>
                   <p>Effective hazard mitigation and climate adaptation lanning and implementation need to be done at a larger, regional scale.  (NBS) in particular should be considered at an ecosystem scale to prioritize the most effective solutions and locations.</p>
                   <Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
                </Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox glossary={toolboxData} />
				</Col>
			</Row>
		</>
	);
}

export default OurStrategyPage;