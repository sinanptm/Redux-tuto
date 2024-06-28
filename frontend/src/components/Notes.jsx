import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NOTES = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <Card className="bg-secondary text-white h-100">
            <Card.Body>
              <Card.Title>Store</Card.Title>
              <Card.Text>
                The Store holds the entire state of your application. It is the single source of truth and allows you to access the state from anywhere in your app.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card className="bg-secondary text-white h-100">
            <Card.Body>
              <Card.Title>useSelector</Card.Title>
              <Card.Text>
                The <code>useSelector</code> hook is used to extract data from the Redux store state using a selector function. It ensures that your component re-renders when the selected state changes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card className="bg-secondary text-white h-100">
            <Card.Body>
              <Card.Title>Reducers</Card.Title>
              <Card.Text>
                Reducers are pure functions that take the current state and an action as arguments, and return a new state. They specify how the application's state changes in response to actions sent to the store.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
      <Col>
        <Card className="bg-secondary text-white h-100">
          <Card.Body>
            <Card.Title>Dispatch</Card.Title>
            <Card.Text>
              The <code>dispatch</code> function is used to send actions to the Redux store. This is the only way to trigger a state change. When <code>dispatch</code> is called, the store runs the reducer and updates the state accordingly.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default NOTES;
