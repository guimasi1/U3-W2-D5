import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import ShowWeather from "./ShowWeather";
import CitiesDropdown from "./CitiesDropdown";

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
        console.log(latitude, longitude);
        setCoordinates({
          lat: latitude,
          lon: longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    getCityImage(selectedCity);
  }, [selectedCity]);

  const getCoordinates = (selectedCity) => {
    fetch(
      selectedCity
        ? `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${apiKey}`
        : `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
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

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data5days = await res.json();
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

  //   useEffect(() => {
  //     getWeather5Days();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [coordinates]);

  useEffect(() => {
    getWeather();
    getWeather5Days();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <div>
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
      <ShowWeather
        weatherData={weatherData}
        cityImage={cityImage}
        weatherData5Days={weatherData5Days}
      />
    </div>
  );
};
export default SearchBar;
