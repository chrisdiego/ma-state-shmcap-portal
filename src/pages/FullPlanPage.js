//Packages
import React, { useState } from 'react';

//Components
import { Row, Col } from 'react-bootstrap';
import PageLayout from './PageLayout';

//Assets
import { fullPlanData } from '../data.js';

const Chapter = ({ item }) => {
    const [expanded, setExpanded] = useState();

    const expandSection = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <Row className="text-center text-sm-left my-3">
                <Col sm={9}>
                    <button className="btn btn-link p-0 text-left" onClick={() => expandSection()}><h4 className="text-secondary font-weight-bold" >{item.title}</h4></button>
                    {expanded ? <p className="mt-3">{item.description}</p> : null}
                </Col>
                <Col sm={1}>
                    <h5 className="text-secondary font-weight-bold">{item.size}</h5>
                </Col>
                <Col sm={2}>
                    <a href={item.file} download className="btn btn-link text-primary text-center p-0"><h5>Download Now</h5></a>
                </Col>
            </Row>
            <hr style={{opacity: "1", borderColor: "black"}}></hr>
        </>
    );
}

const FullPlanPage = () => {
    return (
        <PageLayout title="Full Plan">
            {fullPlanData.map(item => <Chapter key={"chapter-" + item.title} item={item} />)}
        </PageLayout>
    );
}

export default FullPlanPage;
