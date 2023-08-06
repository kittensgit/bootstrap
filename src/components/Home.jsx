import React from 'react';
import Slider from './Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ocean from '../ocean.jpg';

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
        </>
    );
};

export default Home;
