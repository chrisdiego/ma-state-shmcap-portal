//Packages
import React from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PageLayout from './PageLayout';

//Assets
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
        <PageLayout title="Glossary">
            <Row className="mx-0">
                <Col sm={6}>
                    {mapData(glossaryData1)}
                </Col>
                <Col sm={6}>
                    {mapData(glossaryData2)}
                </Col>
            </Row>
        </PageLayout>
    );
};

export default Glossary;