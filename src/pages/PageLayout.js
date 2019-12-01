import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeading from '../utils/PageHeading';
import Toolbox from '../utils/Toolbox';

const PageLayout = ({ children, toolboxData, title }) => {
    return (
        <>
            <Row className="m-0">
                <PageHeading title={title} />
            </Row>
            <Row className="page-container mx-auto my-5">
                <Col sm={8}>
                    {children}
                </Col>
                <Col sm={{span: 3, offset: 1}}>
                    <Toolbox glossary={toolboxData} />
                </Col>
            </Row>
        </>
    );
}

export default PageLayout;