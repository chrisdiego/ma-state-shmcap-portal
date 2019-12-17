//Packages
import React from 'react';

//Components
import PageLayout from './PageLayout';
import PDFLink from '../utils/PDFLink';
import { Row, Col } from 'react-bootstrap';

//Assets
import statehouse from '../assets/statehouse.jpg';

const CapabilitiesPage = () => {
	return (
		<PageLayout title="Current Capabilities and Adaptability">
			<Row>
				<Col sm={6}>
        			<img className="mw-100 float-left pr-5" style={{maxHeight: "700px"}} src={statehouse} alt="Massachusetts state house" />
				</Col>
				<Col sm={6}>
					<p>To maintain its commitment, the Commonwealth will continue to work across state government to build institutional capacity, maintain the best available science and data, and develop operations and policies to adapt to changing natural hazards and the effects of climate change.  The SHMCAP evaluates the Commonwealth's existing capabilities to implement hazard mitigation and climate adaptation activities on a state-wide level, and presents agency-specific analyses of the State's capacity to adapt to changing hazards and climate conditions over time.  These results were used to create a comprehensive and effective strategy to integrate future hazard mitigation and climate change adaptation.</p>
					<p>The Commonwealth has bolstered its long history of advancing risk reduction and resilience across the state through recent State-led initiatives to increase state and local government capacity to deal with the challenge of climate change and natural hazards.  Examples include:</p>
					<ul className="pl-3">
						<li className="text-primary mb-2">
							<PDFLink page="73" pdf="plan">Significant investment in statewide downscaled climate change projections at the county and watershed scale</PDFLink>
						</li>
						<li className="text-primary mb-2">
							<PDFLink page="531" pdf="plan">Coordination of regional and community-based hazard mitigation plans</PDFLink>
						</li>
						<li className="text-primary mb-2">
							<a href="https://www.mass.gov/hazard-mitigation-assistance-grant-programs" target="_blank">Coordination of hazard mitigation assistance grant programs</a>
						</li>
						<li className="text-primary mb-2">
							<PDFLink page="395" pdf="plan">Fiscal Year 2019 Capital Investment Plan</PDFLink>
						</li>
						<li className="text-primary mb-2">
							<a href="https://www.mass.gov/news/governor-baker-signs-legislation-directing-24-billion-to-climate-change-adaptation" target="_blank">Environmental Bond Bill signed into law August 2018</a>
						</li>
						
						<li className="text-primary mb-2">
							<a href="https://www.mass.gov/service-details/coastal-resilience-grant-program" target="_blank">Coastal Resilience Grant Program expansions</a>
						</li>
						<li className="text-primary mb-2">
							<a href="https://resilientma.org/mvp" target="_blank">Municipal Vulnerability Preparedness Program growth</a>
						</li>
					</ul>
					<PDFLink page="393" pdf="plan" className="btn btn-primary">Want to know more?</PDFLink>
				</Col>
			</Row>
		</PageLayout>
	);
}

export default CapabilitiesPage;