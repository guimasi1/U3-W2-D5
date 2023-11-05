import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import ShowWeather from "./ShowWeather";
import CitiesDropdown from "./CitiesDropdown";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import ChooseUnits from "./ChooseUnits";

const apiKey = "78a17f796cc68d0511d622fe90ba4e4b";
const pexelKey = "5RKicZfAEfo8m1JX6yT1vyTmAYDVq4777xWQyZfx1QBRZM4xWq7CeS1i";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherData5Days, setWeatherData5days] = useState([]);
  const [cityImage, setCityImage] = useState("");
  const [favouriteCities, setFavouriteCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [alert, setAlert] = useState(false);
  const [isItFirstLog, setIsItFirstLog] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    getCoordinates(selectedCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  //   const getCoordinates = async () => {
  //     try {
  //       const res = await fetch(
  //         `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apiKey}`
  //       );
  //       if (!res.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       const data = await res.json();

  //       setCoordinates({
  //         lat: data[0].lat,
  //         lon: data[0].lon,
  //       });
  //     } catch (err) {
  //       console.log("An error occurred:", err);
  //     }
  //   };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoordinates({
          lat: latitude,
          lon: longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    setIsItFirstLog(false);
  }, []);

  useEffect(() => {
    getCityImage(selectedCity);
  }, [selectedCity]);

  const getCoordinates = (selectedCity) => {
    setSpinner(true);
    fetch(
      selectedCity
        ? `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${apiKey}`
        : `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          setAlert(false);

          setSpinner(false);
          return res.json();
        } else {
          if (!isItFirstLog) {
            setAlert(true);
          }
          setSpinner(false);
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        setCoordinates({
          lat: data[0].lat,
          lon: data[0].lon,
        });
      })
      .catch((err) => {
        console.log("An error occurred:", err);
      });
  };

  const [units, setUnits] = useState("metric");
  const changeUnits = (unit) => {
    setUnits(unit.toLowerCase());
  };
  useEffect(() => {
    getWeather();
    getWeather5Days();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);
  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          coordinates.lat
        }&lon=${coordinates.lon}&appid=${apiKey}&units=${
          units ? units : "metric"
        }`
      );
      if (!res.ok) {
        setSpinner(false);

        throw new Error("Something went wrong!");
      }
      setAlert(false);
      setSpinner(false);

      const data = await res.json();
      console.log("Data:", data);
      setWeatherData(data);
    } catch (err) {
      console.log("An error occurred:", err);
    }
  };

  const getWeather5Days = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          coordinates.lat
        }&lon=${coordinates.lon}&appid=${apiKey}&units=${
          units ? units : "metric"
        }`
      );
      if (!res.ok) {
        setSpinner(false);

        throw new Error("Something went wrong!");
      }
      const data5days = await res.json();
      setAlert(false);
      setSpinner(false);

      setWeatherData5days(data5days.list);
      // const [date, time] = data5days.list[0].dt_txt.split(" ");
    } catch (err) {
      console.log("An error occurred:", err);
    }
  };

  const getCityImage = (city) => {
    fetch(`https://api.pexels.com/v1/search?query=${city}`, {
      method: "GET",
      headers: {
        Authorization: pexelKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("ERROR");
        }
      })

      .then((data) => {
        console.log(data.photos[0].src.landscape);
        setCityImage(data.photos[0].src.landscape);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [pollutionData, setPollutionData] = useState(null);
  const getPollutionData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
      );
      if (!res.ok) {
        setSpinner(false);

        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      setAlert(false);
      setSpinner(false);
      console.log(data.list[0], "pollution data");
      setPollutionData(data.list[0]);
      // const [date, time] = data5days.list[0].dt_txt.split(" ");
    } catch (err) {
      console.log("An error occurred:", err);
    }
  };

  //   useEffect(() => {
  //     getWeather5Days();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [coordinates]);

  useEffect(() => {
    getWeather();
    getWeather5Days();
    getPollutionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <div>
      {alert && (
        <Alert variant="danger" className="text-center">
          Something went wrong
        </Alert>
      )}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getCoordinates();
          getCityImage(searchValue);
          setInputValue("");
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="d-flex justify-content-center ">
            <h4>Search for your city</h4>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Rome"
            min={1}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSearchValue(e.target.value);
            }}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            className="w-50 bg-blue-dark"
            onClick={(e) => {
              e.preventDefault();
              getCoordinates();
              setInputValue("");
            }}
          >
            Search
          </Button>
        </div>
      </Form>

      <CitiesDropdown
        handleCitySelect={handleCitySelect}
        favouriteCities={favouriteCities}
      />
      <ChooseUnits changeUnits={changeUnits} />
      {spinner && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>{" "}
        </div>
      )}
      {!spinner && (
        <ShowWeather
          weatherData={weatherData}
          weatherData5Days={weatherData5Days}
          pollutionData={pollutionData}
          cityImage={cityImage}
          units={units}
        />
      )}
    </div>
  );
};
export default SearchBar;
