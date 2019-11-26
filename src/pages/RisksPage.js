import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { Link } from 'react-router-dom';

const RisksPage = () => {
	const toolboxData = [
		{
			label: "Risk Assessment",
			href: ""
		},
		{
			label: "Key Vulnerability Assessment Findings",
			href: ""
		}
	];
	return (
		<>
			<Row>
				<PageHeading title="Risks & Vulnerabilities the Commonwealth Faces" />
			</Row>
			<Row className="m-5">
				<Col sm={7}>
				   <p>Climate change and the anticipated exacerbation of natural hazards will affect residents, government, local communities, infrastructure, natural resources, and the private sector. The degree of exposure and consequences of these changes will vary across the Commonwealth</p>
				   <Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
				   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
				   <h5 className="text-secondary font-weight-bold my-4">Risk Assessment</h5>
				   <Row className="align-items-center">
					   <Col sm={6}>
						<img className="mw-100" src="https://via.placeholder.com/300x400" alt="placeholder image" />
					   </Col>
					   <Col sm={6}>
						<p>The risk assessment includes information from almost 80 state agency climate change vulnerability assessments undertaken during development of this plan as a key requirement of Executve Order 569. Vulnerability to climate change is a function of exposure, sensitivity, and adaptive capacity.</p>
						<Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
					   </Col>
				   </Row>
				   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
				   <h5 className="text-secondary font-weight-bold my-4">Key Vulnerability Assessment Findings</h5>
				   <img className="mw-100" src="https://via.placeholder.com/1000x300" alt="placeholder image" />
				   <ul className="pl-3">
					<li className="mt-3">
						<b>Vulnerability assessment completed by approximately 80 state agencies</b>
					</li>
					<li className="mt-3">
						<b>Nearly 1,000 critical items were assessed:</b><br />
						<span>386 physical/non-physical assets | 340 functions | 231 population groups</span>
					</li>
					<li className="mt-3">
						<b>Vast majority of agencies identified multiple concerns regarding impacts from climate change and natural hazards</b>
					</li>
					<li className="mt-3">
						<b>Top five hazards based on number of assets with a "High Risk" rating:</b><br />
						<span>Extreme precipitatino | Hurricanes/Tropical Storms | Nor'easter | Ice Storms | Severe Winter Storm</span>
					</li>
					<li className="mt-3">
						<b>Ability to withstand natural hazards and climate impacts:</b><br />
						<span>Excellent: 6% | Good: 38% | Satisfactory: 42% | Fair: 14% | Poor: 0%</span>
					</li>
				   </ul>
				   <Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
				</Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox glossary={toolboxData} />
				</Col>
			</Row>
		</>
	);
}

export default RisksPage;