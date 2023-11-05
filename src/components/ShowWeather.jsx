// import { weatherData } from "./SearchBar";
import MainInfo from "./MainInfo";
import MoreInfo from "./MoreInfo";
import FiveDaysForecast from "./FiveDaysForecast";

const ShowWeather = ({ weatherData, weatherData5Days, cityImage }) => {
  return (
    <div>
      <div>
        <div className="mt-3">
          {weatherData && (
            <MainInfo cityImage={cityImage} weatherData={weatherData} />
          )}
          {weatherData && <MoreInfo weatherData={weatherData} />}
          {weatherData5Days && weatherData && (
            <FiveDaysForecast weatherData5Days={weatherData5Days} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
