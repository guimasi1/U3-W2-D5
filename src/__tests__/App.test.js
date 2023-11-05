import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Correct mounting", () => {
  it("mounts correctly the h4", () => {
    render(<App />);
    const h4 = screen.getByText(/search for your city/i);
    expect(h4).toBeInTheDocument();
  });
});
