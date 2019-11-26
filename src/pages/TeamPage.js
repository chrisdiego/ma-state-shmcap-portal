import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { Link } from 'react-router-dom';

const TeamPage = () => {
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
                   <h5 className="text-secondary font-weight-bold my-4">RMAT Responsibilities</h5>
                   <p>Under the direction of the primary state agencies, the Massachusetts Emergency Management Agency (MEMA) and EOEEA's Climate Change Program, the RMAT will be tasked with monitoring an dtracking the implementation process, making recommendations to and supporting the primary state agencies on plan updates, and facilitating coordiation across State government and with stakeholders, including buisnesses, cities, and towns.</p>
                   <hr style={{borderWidth: "thick", opacity: "0.6"}} className="mt-5" />
                </Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox glossary={toolboxData} />
				</Col>
			</Row>
		</>
	);
}

export default TeamPage;