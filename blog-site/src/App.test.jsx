/**
 * @vitest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import blogData from "./blog"; 
import "@testing-library/jest-dom"; // This helps with .toBeInTheDocument()

test("renders blog name and articles from props", () => {
  render(<App />);
  
  // Test if Header renders name
  const headerElement = screen.getByText(blogData.name);
  expect(headerElement).toBeInTheDocument();

  // Test if About renders correct alt text
  const logo = screen.getByAltText("blog logo");
  expect(logo).toBeInTheDocument();
});