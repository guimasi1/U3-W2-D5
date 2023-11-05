// import { weatherData } from "./SearchBar";
import MainInfo from "./MainInfo";
import MoreInfo from "./MoreInfo";
import FiveDaysForecast from "./FiveDaysForecast";

const ShowWeather = ({ weatherData, weatherData5Days }) => {
  return (
    <div>
      <div>
        <div className="mt-3">
          {weatherData && <MainInfo weatherData={weatherData} />}
          {weatherData && <MoreInfo weatherData={weatherData} />}
          {weatherData5Days && (
            <FiveDaysForecast weatherData5Days={weatherData5Days} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
