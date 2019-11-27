import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { Link } from 'react-router-dom';

const RisksPage = () => {
	const toolboxData = [
		{
			label: "Risk Assessment",
			href: "/risks#riskAssessment"
		},
		{
			label: "Key Vulnerability Assessment Findings",
			href: "/risks#keyVulnerability"
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
				   <a href="https://www.mass.gov/files/documents/2018/09/18/SHMCAP-September2018-Executive-Summary.pdf#%5B%7B%22num%22%3A60%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D" className="btn btn-primary my-4" target="_blank">Want to know more?</a>
				   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
				   <h5 className="text-secondary font-weight-bold my-4" id="riskAssessment">Risk Assessment</h5>
				   <Row className="align-items-center">
					   <Col sm={6}>
						<img className="mw-100" src="https://via.placeholder.com/300x400" alt="placeholder image" />
					   </Col>
					   <Col sm={6}>
						<p>The risk assessment includes information from almost 80 state agency climate change vulnerability assessments undertaken during development of this plan as a key requirement of Executve Order 569. Vulnerability to climate change is a function of exposure, sensitivity, and adaptive capacity.</p>
						<a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A484%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C720%2C0%5D" className="btn btn-primary my-4" target="_blank">Want to know more?</a>
					   </Col>
				   </Row>
				   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
				   <h5 className="text-secondary font-weight-bold my-4" id="keyVulnerability">Key Vulnerability Assessment Findings</h5>
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
						<span>Extreme precipitation | Hurricanes/Tropical Storms | Nor'easter | Ice Storms | Severe Winter Storm</span>
					</li>
					<li className="mt-3">
						<b>Ability to withstand natural hazards and climate impacts:</b><br />
						<span>Excellent: 6% | Good: 38% | Satisfactory: 42% | Fair: 14% | Poor: 0%</span>
					</li>
					<li className="mt-3">
						<b>Length for Agency to return to essential functionality following an extreme weather event that results in significant damage to critical assets and/or functions:</b><br />
						<span>Months: 7% | Weeks: 32% | Days: 43% | Hours: 19%</span>
					</li>
					<li className="mt-3">
						<b>Remote operation capability:</b><br />
						<span>Yes: 82% | No: 18%</span>
					</li>
					<li className="mt-3">
						<b>Status of incorporating natural hazard mitigation and climate change adaptation into programs:</b><br />
						<span>Currently incoporating: 28% | Planning to incorporate: 32% | Not incorporating: 29% | Don't know: 10%</span>
					</li>
					<li className="mt-3">
						<b>Plans, policies, or procedures in need of revision to better consider climate change:</b><br />
						<span>Yes: 24% | No: 37% |  Don't know: 39%</span>
					</li>
					<li className="mt-3">
						<b>Application of factors derived from state agency adaptative capacity responses to risk scores significantly reduced the number of “High Risk” critical items – overall 80% reduction.</b><br />
					</li>
					<li className="mt-3">
						<b>Top hazards with “High Vulnerability” scores based on number of critical items:</b><br />
						<span>Physical/Non-Physical Assets: Severe Winter Storm/Ice Storm | Functions: Coastal Flooding |  Population Groups: Coastal Flooding</span>
					</li>
				   </ul>
				</Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox glossary={toolboxData} />
				</Col>
			</Row>
		</>
	);
}

export default RisksPage;