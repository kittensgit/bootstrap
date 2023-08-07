import React from 'react';
import { Container } from 'react-bootstrap';
import ocean from '../ocean.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${ocean}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: 2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <div className="container-fluid bg-light p-5 jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Bootstrap</h1>
                    <p>
                        Sit velit magna irure ea dolor consectetur. Consequat
                        veniam eu eu reprehenderit ut proident commodo mollit
                        fugiat do labore culpa. Eiusmod enim eiusmod anim
                        pariatur magna aute reprehenderit incididunt pariatur
                        pariatur. Enim ipsum enim pariatur culpa exercitation
                        magna Lorem eu pariatur elit incididunt incididunt.
                        pariatur. Enim ipsum enim pariatur culpa exercitation
                        magna Lorem eu pariatur elit incididunt incididunt.
                        pariatur. Enim ipsum enim pariatur culpa exercitation
                        magna Lorem eu pariatur elit incididunt incididunt.
                    </p>
                </Container>
            </div>
        </Styles>
    );
};

export default Jumbotron;
