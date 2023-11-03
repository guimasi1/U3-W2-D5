import { weatherData } from "./SearchBar";
import MainInfo from "./MainInfo";
import MoreInfo from "./MoreInfo";

const ShowWeather = () => {
  const weatherToShow = weatherData.value;
  return (
    <div>
      <div>
        {weatherToShow && (
          <div>
            <MainInfo />
            <MoreInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowWeather;
