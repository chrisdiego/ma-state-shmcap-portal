//Packages
import React from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PageLayout from './PageLayout';
import PDFLink from '../utils/PDFLink';
import ClearinghouseCollection from './ClearinghouseCollection';

const TeamPage = () => {
	const toolboxData = [
		{
			label: "RMAT Responsibilities",
			href: "/action-team#responsibilities"
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
		<PageLayout title="Resilient MA Action Team" toolboxData={toolboxData}>
			<h5 id="responsibilities" className="text-secondary font-weight-bold my-4">RMAT Responsibilities</h5>
			<p>
        Under the direction of the primary state agencies, the Massachusetts Emergency Management Agency (MEMA) and the Executive Office of Energy and Environmental Affairs (EEOEEA), the RMAT will be tasked with monitoring and tracking the implementation process, making recommendations to and supporting the primary state agencies on plan updates.  The RMAT will also facilitate coordination across State government and with stakeholders, including businesses, cities, and towns.
      </p>
      <PDFLink page="506" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
			<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
      <ClearinghouseCollection title='RMAT and Agency Highlights' collection_name="MA/RMAT-highlights">
      </ClearinghouseCollection>
			<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
			<h5 id="implementation" className="text-secondary font-weight-bold mt-5">Plan Implementation</h5>
			<Row className="mx-0 align-items-center">
				<Col className="pl-0">
					<p>To maintain relevancy, evaluate progress, and improve long-term resiliency, the SHMCAP is a living document that will evolve as specific hazard mitigation, and climate adaptation actions are implemented and in response to an ongoing dialogue with stakeholders.</p>
					<p>Effective plan implantation will be accomplished by designing implementation strategies and establishing timelines for priority  actions and by continuing to monitor, evaluate, update, and develop actions as new data and experience become available. Therefore, the responsibility for plan implementation falls on many state agencies.</p>
				</Col>
			</Row>
			<hr style={{borderWidth: "thick", opacity: "0.6"}} className="my-5" />
			<h5 id="maintenance" className="text-secondary font-weight-bold mt-5 mb-4">Plan Maintenance</h5>
			<p>The key components for regular SHMCAP maintenance include an annual plan review, a post-disaster review, and a 5-year plan review and update. Effective plan maintenance will also require additional recurring activities that are not bound to specific methods or schedules, such as tracking and documenting new or best practices for hazard mitigation and climate adaptation, or new policies or procedures that may affect how the SHMCAP is implemented. The RMAT is expected to perform many of these ongoing activities.</p>
			<PDFLink page="501" pdf="plan" className="btn btn-primary my-4">Want to know more?</PDFLink>
		</PageLayout>
	);
}

export default TeamPage;
