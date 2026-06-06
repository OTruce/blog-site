import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import blog from "./blog";

test("renders blog name from props", () => {
  render(<App />);

  const title = screen.getByText(blog.name);
  expect(title).toBeInTheDocument();
});