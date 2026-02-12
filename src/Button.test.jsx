import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {

  it("renders button with correct label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<Button label="Submit" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText("Submit"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button label="Disabled" disabled={true} />);
    
    expect(screen.getByTestId("custom-button")).toBeDisabled();
  });

  it("has correct type attribute", () => {
    render(<Button label="Send" type="submit" />);
    
    expect(screen.getByTestId("custom-button"))
      .toHaveAttribute("type", "submit");
  });

});
