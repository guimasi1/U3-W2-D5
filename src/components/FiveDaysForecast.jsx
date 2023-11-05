import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const FiveDaysForecast = ({ weatherData5Days }) => {
  //   if (weatherData5Days) {
  return (
    <Row className="mt-4">
      <h3 className="text-center mb-4">5 days - Forecast</h3>
      <Col id="forecast-display">
        <ListGroup>
          {weatherData5Days.map((day) => (
            <ListGroup.Item className="border-0" key={day.dt}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center ">
                  <div className="d-flex gap-3">
                    <p>{day.dt_txt.split(" ")[0].slice(5)}</p>
                    <p>{day.dt_txt.split(" ")[1].slice(0, 5)}</p>
                    <p>{day.weather[0].main}</p>
                  </div>
                  <div>
                    <img
                      className="mb-2"
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt="icon-weather"
                      width="50%"
                    />
                  </div>
                </div>{" "}
                <div>{day.main.temp}°C</div>
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default FiveDaysForecast;
