import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CitiesDropdown = ({ favouriteCities, handleCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(selectedCity);
  }, [selectedCity]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    handleCitySelect(city);
    console.log("ciao");
  };
  return (
    <div className="mb-5 ">
      <h4 className="text-center mt-4">Your favourite cities</h4>
      <Form.Select
        aria-label="Default select example"
        onChange={handleCityChange}
      >
        <option>Select your favourite city</option>
        {favouriteCities.map((city, i) => {
          return (
            <option key={i}>
              {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
            </option>
          );
        })}
      </Form.Select>
      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          className="bg-blue-dark w-50"
        >
          Click here to add cities
        </Button>
      </div>
    </div>
  );
};

export default CitiesDropdown;
