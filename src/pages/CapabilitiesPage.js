import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { Link } from 'react-router-dom';

const CapabilitiesPage = () => {
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
				<PageHeading title="Current Capabilities and Adaptability" />
			</Row>
			<Row className="m-5">
				<Col sm={7}>
                    <img className="mw-100 float-left pr-5" src="https://via.placeholder.com/350x400" alt="placeholder image" />
                    <p>To maintain its commitment, the Commonwealth will continune to work across state government to build institutional capacity, maintain best available science and data, and develop operations and policies to adapt to changing natural hazards and the effects of climate change.  The SHMCAP evaluates the Commonwealth's existing capabilities to implement hazard mitigation and climate adaptation activities on a state-wide level, and resents agency-specific analyses of the State's capacity to adapt to changing hazards and climate conditions over time.  These results were used to create a comprehensive and effective strategy to integrate future hazard mitigation and climate change adaptation.</p>
                    <p>The Commonwealth has bolstered its long history of advancing risk reduction and resilience across the state through recent State-led initiatives to increase state and local government capacity to deal with the challenge of climate change and natural hazards.  Examples include:</p>
                    <ul className="pl-3">
                        <li className="text-primary mb-2">Significant investment in statewide, downscaled climate change projections at the county and watershed scale</li>
                        <li className="text-primary mb-2">Coordination of regional and community-based hazard mitigation plans</li>
                        <li className="text-primary mb-2">Coordination of hazard mitigation assistance grant programs</li>
                        <li className="text-primary mb-2">Fiscal Year 2019 Capital Investment Plan</li>
                        <li className="text-primary mb-2">Environmental Bond Bill signed into law August 2018</li>
                        <li className="text-primary mb-2">Coastal Resilience Grant Program expansion</li>
                        <li className="text-primary mb-2">Municial Vulnerability Prearedness program growth</li>
                    </ul>
                    <Link to="/placeholder" className="btn btn-primary my-4">Want to know more?</Link>
                </Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox />
				</Col>
			</Row>
		</>
	);
}

export default CapabilitiesPage;