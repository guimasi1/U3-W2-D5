import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { ThermometerHigh, ThermometerLow } from "react-bootstrap-icons";

const MainInfo = ({ weatherData, cityImage, units, pollutionData }) => {
  return (
    <Card id="card-main" className="rounded-5 pb-3 ">
      <Card.Img className="rounded-top-5" variant="top" src={cityImage} />
      <Card.Body>
        <Card.Title className="text-center">
          <h3 className="fs-2 fw-bold ">
            {weatherData.name}, {weatherData.sys.country}
          </h3>
        </Card.Title>
        <div className="d-flex justify-content-center">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <h6 className="text-center">
          {weatherData.weather[0].description.charAt(0).toUpperCase() +
            weatherData.weather[0].description.slice(1)}
        </h6>
        <div className="d-flex justify-content-center mb-1 fs-4 py-2 ">
          {pollutionData && (
            <Badge
              pill
              bg={
                pollutionData.main.aqi === 1
                  ? "success"
                  : pollutionData.main.aqi === 2
                  ? "success"
                  : pollutionData.main.aqi === 3
                  ? "warning"
                  : pollutionData.main.aqi === 4
                  ? "danger"
                  : "danger"
              }
            >
              AIR QUALITY: {pollutionData.main.aqi}
            </Badge>
          )}
        </div>
        <div className="text-center flex-grow-1 ">
          Current temperature: <br />
          <div className="d-flex align-items-center justify-content-center mt-1 fs-1 fw-bold ">
            {weatherData.main.temp}° {units === "metric" ? "C" : "F"}
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            Min <br />
            <div className="d-flex align-items-center justify-content-center mt-1 ">
              <ThermometerLow id="low-temperature" />
              {weatherData.main.temp_min}° {units === "metric" ? "C" : "F"}
            </div>
          </div>
          <div className="text-center">
            Max <br />
            <div className="d-flex align-items-center justify-content-center mt-1 ">
              <ThermometerHigh id="high-temperature" />
              {weatherData.main.temp_max}° {units === "metric" ? "C" : "F"}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainInfo;
