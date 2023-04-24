import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/Header/Header';
import Footer from '../../pages/shared/footer/Footer';
import RightSideNav from '../../pages/rightsidenav/RightSideNav';

const NewsLayout = () => {
    return (
        <Container>
        <Header></Header>

        <Container>
            <Row>
                <Col lg={9}><Outlet></Outlet></Col>
                <Col lg={3}>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </Container>
    );
};

export default NewsLayout;