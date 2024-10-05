import React from 'react'; // <-- Add this line
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

test('should load Contact Us component', () => {
  render(<Contact />);
  
  
  const button = screen.getByText("Send Message");
  // const heading = screen.getByRole("heading", { level: 2 });
  
  // ASSERTION
  expect(button).toBeInTheDocument();
//   // expect(button).toHaveTextContent('Contact'); // Additional assertion to check the content
});
test('should load Contact Us component', () => {
  render(<Contact />);
const label = screen.getByText("Email Address"); // Case-insensitive search for "Send Message"

// ASSERTION
expect(label).toBeInTheDocument(); 
});