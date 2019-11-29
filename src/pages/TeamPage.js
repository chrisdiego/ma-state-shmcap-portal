import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import EOPSSlogo from '../assets/EOPSSlogo.png';
import massdotlogo from '../assets/massdotlogo.jpg';
import laborlogo from '../assets/laborlogo.png';

const TeamPage = () => {
	const toolboxData = [
		{
			label: "RMAT Responsibilities",
			href: "/action-team#resonsibilities"
		},
		{
			label: "RMAT and Agency Highlights",
			href: "/action-team#highlights"
		},
		{
			label: "Plan Implementation",
			href: "/action-team#implementation"
		},
		{
			label: "Plan Maintenance",
			href: "/action-team#maintenance"
		}
	];
	return (
		<>
			<Row className="m-0">
				<PageHeading title="Resilient MA Action Team" />
			</Row>
			<Row className="my-5 page-container mx-auto">
				<Col sm={7}>
					<h5 id="responsibilities" className="text-secondary font-weight-bold my-4">RMAT Responsibilities</h5>
					<p>Under the direction of the primary state agencies, the Massachusetts Emergency Management Agency (MEMA) and EEOEEA’s Climate Change Program, the RMAT will be tasked with monitoring and tracking the implementation process, making recommendations to and supporting the primary state agencies on plan updates, and facilitating coordination across State government and with stakeholders, including businesses, cities, and towns.</p>
					<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
					<h5 id="highlights" className="text-secondary font-weight-bold my-5">RMAT and Agency Highlights</h5>
					<Row className="mx-0 mb-4">
						<Col sm={3} style={{marginLeft: "-15px"}}>
							<img className="mw-100" src="https://via.placeholder.com/200x250" alt="placeholder image" />
						</Col>
						<Col sm={3}>
							<img className="mw-100" src="https://via.placeholder.com/200x250" alt="placeholder image" />
						</Col>
						<Col sm={3}>
							<img className="mw-100" src="https://via.placeholder.com/200x250" alt="placeholder image" />
						</Col>
						<Col sm={3}>
							<img className="mw-100" src="https://via.placeholder.com/200x250" alt="placeholder image" />
						</Col>
					</Row>
					<a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A1564%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C475%2C0%5D" className="btn btn-primary my-4" target="_blank">Want to know more?</a>
					<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
					<h5 id="implementation" className="text-secondary font-weight-bold mt-5">Plan Implementation</h5>
					<Row className="mx-0 align-items-center">
						<Col sm={9} className="pl-0">
							<p>To maintain relevancy, evaluate progress, and improve long-term resiliency, the SHMCAP is a living document that will evolve as specific hazard mitigation, and climate adaptation actions are implemented and in response to an ongoing dialogue with stakeholders.</p>
							<p>Effective plan implantation will be accomplished by designing implementation strategies and establishing timelines for priority  actions and by continuing to monitor, evaluate, update, and develop actions as new data and experience become available. Therefore, the responsibility for plan implementation falls on many state agencies.</p>
						</Col>
						<Col sm={3}>
						<img className="mw-100 mb-3 d-block mx-auto" src={EOPSSlogo} style={{maxHeight: "200px"}} alt="EOPSS" />
						<img className="mw-100 mb-3" src={massdotlogo} alt="Mass DOT" />
						<img className="mw-100 mb-3" src={laborlogo} alt="Labor" />
						</Col>
					</Row>
					<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
					<h5 id="maintenance" className="text-secondary font-weight-bold mt-5 mb-4">Plan Maintenance</h5>
					<p>The key components for regular SHMCAP maintenance include an annual plan review, a post-disaster review, and a 5-year plan review and update. Effective plan maintenance will also require additional recurring activities that are not bound to specific methods or schedules, such as tracking and documenting new or best practices for hazard mitigation and climate adaptation, or new policies or procedures that may affect how the SHMCAP is implemented. The RMAT is expected to perform many of these ongoing activities.</p>
					<a href="https://www.mass.gov/files/documents/2018/10/26/SHMCAP-September2018-Full-Plan-web.pdf#%5B%7B%22num%22%3A1558%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C611%2C0%5D" className="btn btn-primary my-4" target="_blank">Want to know more?</a>
				</Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox glossary={toolboxData} />
				</Col>
			</Row>
		</>
	);
}

export default TeamPage;