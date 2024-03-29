//Packages
import React from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PDFLink from '../utils/PDFLink';
import PageLayout from './PageLayout';

//Assets
import riskImage1 from '../assets/risk-image1.png';
import riskImage2 from '../assets/risk-image2.png';


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
		<PageLayout title="Risks and Vulnerabilities the Commonwealth Faces" toolboxData={toolboxData}>
		   <p>Climate change and the anticipated exacerbation of natural hazards will affect residents, government, local communities, infrastructure, natural resources, and the private sector. The degree of exposure and consequences of these changes will vary across the Commonwealth.</p>
		   <PDFLink page="6" pdf="summary" className="btn btn-primary my-4">Want to know more?</PDFLink>
		   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
		   <h5 className="text-secondary font-weight-bold my-4" id="riskAssessment">Risk Assessment</h5>
		   <Row className="align-items-center">
			   <Col sm={6}>
				<img className="mw-100" src={riskImage1} alt="placeholder image" />
			   </Col>
			   <Col sm={6} className="pt-4" style={{backgroundColor: "whitesmoke"}}>
				<p>The risk assessment includes information from almost 80 state agency climate change vulnerability assessments undertaken during development of this plan as a key requirement of Executve Order 569. Vulnerability to climate change is a function of exposure, sensitivity, and adaptive capacity.</p>
				<PDFLink page="90" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
			   </Col>
		   </Row>
		   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-4" />
		   <h5 className="text-secondary font-weight-bold my-4" id="keyVulnerability">Key Vulnerability Assessment Findings</h5>
		   <img className="mw-100" src={riskImage2} alt="placeholder image" />
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
				<b>Application of factors derived from state agency adaptive capacity responses to risk scores significantly reduced the number of “High Risk” critical items – overall 80% reduction</b><br />
			</li>
			<li className="mt-3">
				<b>Top hazards with “High Vulnerability” scores based on number of critical items:</b><br />
				<span>Physical/Non-Physical Assets: Severe Winter Storm/Ice Storm | Functions: Coastal Flooding |  Population Groups: Coastal Flooding</span>
			</li>
		   </ul>
		</PageLayout>
	);
}

export default RisksPage;