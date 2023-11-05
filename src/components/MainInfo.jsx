import Card from "react-bootstrap/Card";
import { ThermometerHigh, ThermometerLow } from "react-bootstrap-icons";

const MainInfo = ({ weatherData, cityImage }) => {
  return (
    <Card className="border border-black ">
      <div className="d-flex justify-content-center ">
        <Card.Img variant="top" src={cityImage} />
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          <h3 className="fs-2 fw-bold ">{weatherData.name}</h3>
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
        <div className="text-center flex-grow-1 ">
          Current temperature: <br />
          <div className="d-flex align-items-center justify-content-center mt-1 fs-1 fw-bold ">
            {weatherData.main.temp}° C
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            Min <br />
            <div className="d-flex align-items-center justify-content-center mt-1 ">
              <ThermometerLow id="low-temperature" />
              {weatherData.main.temp_min}°C
            </div>
          </div>
          <div className="text-center">
            Max <br />
            <div className="d-flex align-items-center justify-content-center mt-1 ">
              <ThermometerHigh id="high-temperature" />
              {weatherData.main.temp_max}°C
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainInfo;
