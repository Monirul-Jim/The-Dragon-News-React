import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../pages/rightsidenav/RightSideNav';
import LeftSideNav from '../pages/leftsidenav/LeftSideNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/navigationBar/NavigationBar';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>

            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Main;