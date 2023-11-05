import SearchBar from "./SearchBar";
import ShowWeather from "./ShowWeather";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiveDaysForecast from "./FiveDaysForecast";
import SearchBar2 from "./SearchBar2";

const Main = () => {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={12} lg={{ span: 6, offset: 3 }}>
            {/* <SearchBar /> */}
            <SearchBar2 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
