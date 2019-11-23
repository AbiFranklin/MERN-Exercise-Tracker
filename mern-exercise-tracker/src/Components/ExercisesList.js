import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import bike from '../img/bicycle.png';
import exercise from '../img/exercise.png';
import weight from '../img/gym.png';
import swim from '../img/swimmer.png'
import yoga from '../img/yoga.png'


function ExercisesList() {
  const exercises = [
    {
        "_id": "5dd995e643fe71b923feb0f0",
        "username": "Abi",
        "description": "Biking",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:26:14.318Z",
        "updatedAt": "2019-11-23T20:26:14.318Z",
        "__v": 0
    },
    {
        "_id": "5dd9963143fe71b923feb0f1",
        "username": "Abi",
        "description": "Aerobics",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:27:29.936Z",
        "updatedAt": "2019-11-23T20:27:29.936Z",
        "__v": 0
    },
    {
        "_id": "5dd9964a43fe71b923feb0f2",
        "username": "Abi",
        "description": "Weights",
        "duration": 15,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:27:54.082Z",
        "updatedAt": "2019-11-23T20:27:54.082Z",
        "__v": 0
    },
    {
        "_id": "5dd9966043fe71b923feb0f3",
        "username": "Abi",
        "description": "Running",
        "duration": 20,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:28:16.633Z",
        "updatedAt": "2019-11-23T20:28:16.633Z",
        "__v": 0
    },
    {
        "_id": "5dd9967643fe71b923feb0f4",
        "username": "Abi",
        "description": "Swimming",
        "duration": 40,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:28:38.648Z",
        "updatedAt": "2019-11-23T20:28:38.648Z",
        "__v": 0
    },
    {
        "_id": "5dd9968643fe71b923feb0f5",
        "username": "Abi",
        "description": "Yoga",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "../img/bicycle.png",
        "createdAt": "2019-11-23T20:28:54.163Z",
        "updatedAt": "2019-11-23T20:28:54.163Z",
        "__v": 0
    }
]


  return (
    <div>
      <h1>Exercise List</h1>
      <hr/>
      <Container fluid={true}>
        <Row>
            {exercises.map(exercise => { return (
              <Col xs={12} sm={8} md={7} lg={6} xl={4}>
              <Card className='card' >
              <Card.Img variant="top" src='https://picsum.photos/200' />
              <Card.Body>
                <Card.Title>{exercise.description}</Card.Title>
                <Card.Text>
                  <p>User: {exercise.username}</p>
                  <p>Duration: {exercise.duration}</p>
                </Card.Text>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
            </Col>
            ) })}
        </Row>
      </Container>
    </div>
  );
}

export default ExercisesList;