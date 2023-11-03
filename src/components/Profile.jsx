import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Profile = () => {
  const [userNameInput, setUsernameInput] = useState("");
  const [userName, setUsername] = useState("");
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          {" "}
          <Card>
            <Card.Body>
              <Card.Title className="fs-1">
                Your Username: {userName}
              </Card.Title>
              <Card.Text>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setUsername(userNameInput);
                    setUsernameInput("");
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Set your Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={userNameInput}
                      onChange={(e) => {
                        e.preventDefault();
                        setUsernameInput(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Card.Text>
              <div className="d-flex justify-content-center ">
                <Button className="w-50" variant="primary">
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
