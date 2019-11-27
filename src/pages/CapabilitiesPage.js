import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import statehouse from '../assets/statehouse.tif';

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
			<Row className="m-0">
				<PageHeading title="Current Capabilities and Adaptability" />
			</Row>
			<Row className="m-5">
				<Col sm={7}>
                    <img className="mw-100 float-left pr-5" src={statehouse} alt="Massachusetts state house" />
                    <p>To maintain its commitment, the Commonwealth will continune to work across state government to build institutional capacity, maintain best available science and data, and develop operations and policies to adapt to changing natural hazards and the effects of climate change.  The SHMCAP evaluates the Commonwealth's existing capabilities to implement hazard mitigation and climate adaptation activities on a state-wide level, and resents agency-specific analyses of the State's capacity to adapt to changing hazards and climate conditions over time.  These results were used to create a comprehensive and effective strategy to integrate future hazard mitigation and climate change adaptation.</p>
                    <p>The Commonwealth has bolstered its long history of advancing risk reduction and resilience across the state through recent State-led initiatives to increase state and local government capacity to deal with the challenge of climate change and natural hazards.  Examples include:</p>
                    <ul className="pl-3">
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A436%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C519%2C0%5D" target="_blank"> Significant investment in statewide, downscaled climate change projections at the county and watershed scale</a></li>
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A1662%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D" target="_blank">Coordination of regional and community-based hazard mitigation plans</a>	</li>
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/hazard-mitigation-assistance-grant-programs" target="_blank">Coordination of hazard mitigation assistance grant programs</a></li>
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A1328%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C619%2C0%5D" target="_blank">Fiscal Year 2019 Capital Investment Plan</a></li>
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/news/governor-baker-signs-legislation-directing-24-billion-to-climate-change-adaptation" target="_blank">Environmental Bond Bill signed into law August 2018</a></li>
                        <li className="text-primary mb-2"><a href="https://www.mass.gov/service-details/coastal-resilience-grant-program" target="_blank">Coastal Resilience Grant Program expansion</a></li>
                        <li className="text-primary mb-2"><a href="https://resilientma.org/mvp" target="_blank">Municial Vulnerability Prearedness program growth</a></li>
                    </ul>
                    <a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A1325%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C379%2C0%5D" className="btn btn-primary my-4" target="_blank">Want to know more?</a>
                </Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox />
				</Col>
			</Row>
		</>
	);
}

export default CapabilitiesPage;