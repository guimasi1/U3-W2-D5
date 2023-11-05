import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const FiveDaysForecast = ({ weatherData5Days }) => {
  console.log(weatherData5Days, "weather 5 dayssss");

  //   if (weatherData5Days) {
  return (
    <Row className="mt-4">
      <h3 className="text-center mb-4">Forecast</h3>
      <Col id="forecast-display" className="border">
        <ListGroup>
          {weatherData5Days.map((day) => (
            <ListGroup.Item key={day.dt}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center ">
                  <div className="d-flex gap-3">
                    <p>{day.dt_txt.split(" ")[0].slice(5)}</p>
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
