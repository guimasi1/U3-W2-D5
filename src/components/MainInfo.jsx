import { weatherData } from "./SearchBar";
import Card from "react-bootstrap/Card";
import {
  Thermometer,
  ThermometerHigh,
  ThermometerLow,
} from "react-bootstrap-icons";

const MainInfo = () => {
  const weatherToShow = weatherData.value;

  return (
    <Card className="border border-black ">
      <div className="d-flex justify-content-center ">
        <Card.Img variant="top" src="" />
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          <h3>{weatherToShow.name}</h3>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherToShow.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <h6 className="text-center">
            {weatherToShow.weather[0].description.charAt(0).toUpperCase() +
              weatherToShow.weather[0].description.slice(1)}
          </h6>
          <div className="text-center flex-grow-1 ">
            Current temperature: <br />
            <div className="d-flex align-items-center justify-content-center mt-1 ">
              <Thermometer />
              {weatherToShow.main.temp}° C
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="text-center">
              Min <br />
              <div className="d-flex align-items-center justify-content-center mt-1 ">
                <ThermometerLow />
                {weatherToShow.main.temp_min}°C
              </div>
            </div>
            <div className="text-center">
              Max <br />
              <div className="d-flex align-items-center justify-content-center mt-1 ">
                <ThermometerHigh />
                {weatherToShow.main.temp_max}°C
              </div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MainInfo;
