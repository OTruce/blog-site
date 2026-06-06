import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import blog from "./blog";

test("renders blog name from props", () => {
  render(<App />);

  expect(screen.getByText(blog.name)).toBeInTheDocument();
});