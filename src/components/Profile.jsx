import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Profile = () => {
  const [userNameInput, setUsernameInput] = useState("");
  const [userName, setUsername] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    const initialValue = JSON.parse(saved);
    console.log(initialValue, "initial ");
    return initialValue || [];
  });

  const handleForm = () => {
    setUsername(userNameInput);
    setCities([...cities, cityInput]);
    setUsernameInput("");
    setCityInput("");
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
    console.log(localStorage.getItem("cities"));
  }, [cities]);

  useEffect(() => {
    const saved = localStorage.getItem("cities");
    const initialValue = JSON.parse(saved);
    setCities(initialValue);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title className="fs-1">
                Your Username: {userName}
              </Card.Title>
              <Form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleForm();
                  }
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
                      setUsernameInput(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="favourite-cities">
                  <Form.Label>Add favourite cities</Form.Label>
                  <Form.Control
                    type="text"
                    value={cityInput}
                    onChange={(e) => {
                      setCityInput(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-center ">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleForm();
                  }}
                  className="w-50"
                  variant="primary"
                >
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <div>
            <h4 className="text-center mt-4 ">Favourite Cities</h4>
            <ListGroup>
              {/* {cities.map((city) => {
                return <li>{city}</li>;
              })} */}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
