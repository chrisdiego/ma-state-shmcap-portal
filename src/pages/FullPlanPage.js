import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeading from '../utils/PageHeading';
import { fullPlanData } from '../data.js';

const Chapter = ({ item }) => {
    const [expanded, setExpanded] = useState();

    const expandSection = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <Row className="mx-5 my-3">
                <Col sm={9}>
                    <button className="btn btn-link p-0"><h3 className="text-secondary font-weight-bold" onClick={() => expandSection()}>{item.title}</h3></button>
                    {expanded ? <p className="mt-3">{item.description}</p> : null}
                </Col>
                <Col sm={1}>
                    <h3 className="text-secondary font-weight-bold">{item.size}</h3>
                </Col>
                <Col sm={2}>
                    <a href={item.file} download className="btn btn-link text-primary text-center p-0"><h4>Download Now</h4></a>
                </Col>
            </Row>
            <hr style={{opacity: "1", borderColor: "black"}}></hr>
        </>
    );
}

const FullPlanPage = () => {
    return (
        <>
            <Row className="m-0">
                <PageHeading title="Full Plan" />
            </Row>
            <div className="page-container mx-auto">
                {fullPlanData.map(item => <Chapter item={item} />)}
            </div>
        </>
    );
}

export default FullPlanPage;