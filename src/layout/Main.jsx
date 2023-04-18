import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import RightSideNav from '../pages/rightsidenav/RightSideNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}>this is col 3</Col>
                    <Col lg={6}>this is col 6</Col>
                    <Col lg={3}><RightSideNav></RightSideNav> </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Main;