import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signal } from "@preact/signals-react";
import { useEffect, useState } from "react";

const apiKey = "78a17f796cc68d0511d622fe90ba4e4b";
export const weatherData = signal("");
export const weatherData5Days = signal("");
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const getCoordinates = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apiKey}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      console.log("Data:", data);
      setCoordinates({
        lat: data[0].lat,
        lon: data[0].lon,
      });
      console.log(coordinates);
    } catch (err) {
      console.log("An error occurred:", err);
    }
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
      weatherData.value = data;
      console.log("Data:", data);
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
      weatherData5Days.value = data5days;
      console.log("Data forecast:", data5days);
    } catch (err) {
      console.log("An error occurred:", err);
    }
  };

  useEffect(() => {
    getWeather();
    getWeather5Days();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        getCoordinates();
        setInputValue("");
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="d-flex justify-content-center ">
          <span>Search for your city</span>
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
          className="w-50"
          onClick={(e) => {
            e.preventDefault();
            getCoordinates();
            setInputValue("");
          }}
        >
          Go!
        </Button>
      </div>
    </Form>
  );
};
export default SearchBar;
