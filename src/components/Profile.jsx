import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import FavouriteCities from "./FavouriteCities";
import Footer from "./Footer";

const Profile = () => {
  // const [userNameInput, setUsernameInput] = useState("");
  // const [userName, setUsername] = useState("");
  const [cityInput, setCityInput] = useState("");
  // const [cities, setCities] = useState(() => {
  //   const saved = localStorage.getItem("cities");
  //   const initialValue = JSON.parse(saved);
  //   console.log(initialValue, "initial ");
  //   return initialValue || [];
  // });
  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem("cities");
    const initialValue = JSON.parse(savedCities);
    return initialValue || [];
  });

  const removeCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);

    localStorage.setItem("cities", JSON.stringify(updatedCities));

    setCities(updatedCities);
  };

  const handleForm = () => {
    // setUsername(userNameInput);
    setCities([...cities, cityInput]);
    // setUsernameInput("");
    setCityInput("");
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  // useEffect(() => {
  //   localStorage.setItem("username", userName);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userName]);

  return (
    <Container id="profile" className="mt-5">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleForm();
                  }
                }}
              >
                <Form.Group className="mb-3" controlId="favourite-cities">
                  <Form.Label className="fw-bold">
                    Add favourite cities
                  </Form.Label>
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
                  variant="success"
                >
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {cities && (
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <FavouriteCities cities={cities} removeCity={removeCity} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
