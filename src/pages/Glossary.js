import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Toolbox from '../utils/Toolbox';
import PageHeading from '../utils/PageHeading';
import { glossaryData1, glossaryData2  } from '../data.js';

const mapData = (data) => {
    return (
        data.map(item => {
            return (
                <>
                    <h4 className="text-secondary font-weight-bold mb-0 mt-2"><i>{item.acronym}</i></h4>
                    <span className="text-secondary"><i>{item.definition}</i></span>
                </>
            );}
        )
    )
}

const Glossary = () => {
    return (
        <>
			<Row className="m-0">
				<PageHeading title="Glossary" />
			</Row>
			<Row className="my-5 page-container mx-auto">
				<Col sm={7}>
                    <Row className="mx-0">
                        <Col sm={6}>
                            {mapData(glossaryData1)}
                        </Col>
                        <Col sm={6}>
                            {mapData(glossaryData2)}
                        </Col>
                    </Row>
				</Col>
				<Col sm={{span: 4, offset: 1}}>
					<Toolbox />
				</Col>
			</Row>
		</>
    );
};

export default Glossary;