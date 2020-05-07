import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {MoviesContext} from '../context/movies'


export default function Search() {

    const {query, onInputChange, onSubmitHandler} = React.useContext(MoviesContext);
    return (
            <Container value={query.keyValue}>
                <Form onSubmit={onSubmitHandler} className="search">
                <Row className="justify-content-md-center">
                    <Col  xs={4}>
                     <Form.Control 
                        type="search" 
                        placeholder="Search Movie..." 
                        name="userInput"
                        onChange={onInputChange}          
                        id="search-input"/>
                    </Col>
                    <Col xs lg="2">
                    <Button type="submit" name="Search" variant="primary">Search</Button>
                    </Col>
                </Row>
                </Form>
            </Container>
    )
}