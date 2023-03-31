import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
	test("Should render button with the correct text", () => {
		render(<Button text='Click me!' />);
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("Click me!");
	});
	test("Should call the onClick function when clicked", () => {
		const onClick = jest.fn();
		render(<Button text='Click me!' onClick={onClick} />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});
});
