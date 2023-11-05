import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const FavouriteCities = ({ cities, removeCity }) => {
  return (
    <div className="">
      <ListGroup className="mt-4 ">
        <h4 className="text-center ">Favourite Cities</h4>
        {cities.map((city, i) => {
          return (
            <ListGroup.Item
              key={i}
              className="d-flex justify-content-between align-items-center rounded mb-2 shadow-effect "
            >
              <div>
                {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
              </div>
              <div>
                <Button
                  className="btn-sm btn-danger"
                  onClick={() => {
                    removeCity(i);
                  }}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default FavouriteCities;
