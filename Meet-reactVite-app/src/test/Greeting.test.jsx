import { render, screen } from '@testing-library/react'; // Import necessary functions
import { test, expect } from 'vitest'; // Import Vitest testing functions
import Greeting from '../Greeting'; // Import the Greeting component

// Define a test suite
describe('Greeting Component', () => {
  // Define a test
  test('renders greeting message', () => {
    // Render the Greeting component
    render(<Greeting />);

    // Check if the greeting message is in the document
    expect(screen.getByText(/welcome to my React app/i)).toBeInTheDocument();
  });
});
