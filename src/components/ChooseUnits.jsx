import { useState } from "react";
import Form from "react-bootstrap/Form";
const ChooseUnits = ({ changeUnits }) => {
  const [unit, setUnit] = useState("");
  const handleUnitsChange = (e) => {
    setUnit(e.target.value);
    changeUnits(e.target.value);
  };
  return (
    <div>
      <h5 className="text-center">Units</h5>
      <Form.Select
        onChange={(e) => {
          e.preventDefault();
          handleUnitsChange(e);
        }}
        aria-label="Default select example"
      >
        <option>Choose units</option>
        <option>Metric</option>
        <option>Imperial</option>
      </Form.Select>
    </div>
  );
};
export default ChooseUnits;
