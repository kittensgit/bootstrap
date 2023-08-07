import React from 'react';
import Slider from './Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ocean from '../ocean.jpg';
import Jumbotron from './Jumbotron';

const Home = () => {
    return (
        <>
            <Slider />
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Bootstrap Blog</Card.Title>
                                <Card.Text>
                                    Id id ad et consectetur minim cupidatat id
                                    laboris ea dolore cillum excepteur aliqua.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Bootstrap Blog</Card.Title>
                                <Card.Text>
                                    Id id ad et consectetur minim cupidatat id
                                    laboris ea dolore cillum excepteur aliqua.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean} />
                            <Card.Body>
                                <Card.Title>Bootstrap Blog</Card.Title>
                                <Card.Text>
                                    Id id ad et consectetur minim cupidatat id
                                    laboris ea dolore cillum excepteur aliqua.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron />
            <Container className="mt-5 mb-5">
                <Row>
                    <Col md={7}>
                        <img src={ocean} height="400px" alt="col" />
                    </Col>
                    <Col md={5}>
                        <h2>Bootstrap</h2>
                        <p>
                            Aliquip sint duis laborum occaecat ad officia
                            consectetur commodo sit in. Sunt et proident sunt
                            dolor enim officia. Esse fugiat ad ipsum
                            consectetur. Magna qui nisi fugiat minim. Laboris
                            quis labore quis dolor ad tempor cillum culpa nulla
                            voluptate in elit nostrud. Aliquip sint duis laborum
                            occaecat ad officia consectetur commodo sit in. Sunt
                            et proident sunt dolor enim officia. Esse fugiat ad
                            ipsum consectetur. Magna qui nisi fugiat minim.
                            Laboris quis labore quis dolor ad tempor cillum
                            culpa nulla voluptate in elit nostrud.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
