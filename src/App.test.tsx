/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Main App Component", () => {
	test("rendering", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});
});
