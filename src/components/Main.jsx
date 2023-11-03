import SearchBar from "./SearchBar";
import ShowWeather from "./ShowWeather";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            <SearchBar />
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <ShowWeather />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
