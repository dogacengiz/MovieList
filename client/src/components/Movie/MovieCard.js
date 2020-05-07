import React from 'react'
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

export default function MovieCard({movieName, id, dates, images, type, category}) {

    return (
            <Link to={id}>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={images} alt="" style={{height: "150px"}}/>
                <Card.Body>
                    <Card.Title>Name:{movieName}</Card.Title>
                    <Card.Text>
                    Type:  {type}
                    </Card.Text>
                    <Card.Text>
                    Date:{dates}
                    </Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
            </Link>
    )
}

MovieCard.propTypes = {
   id:PropTypes.string,
   movieName:PropTypes.string,
   images:PropTypes.string,
   category:PropTypes.string,
   genre:PropTypes.string
}

MovieCard.defaultProps = {
   movieName:"Unknown Movie",
   image:"https://image.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg",
   category:"Unknown category",
   genre:"Unknown genre",
}