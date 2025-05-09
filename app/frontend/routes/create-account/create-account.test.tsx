import { describe, test } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CreateAccount } from './create-account';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

describe('CreateAccount', () => {
  test('render', () => {});
  render(<CreateAccount />, { wrapper: BrowserRouter });
  screen.getByLabelText('Username');
  screen.getByLabelText('Password');
});

describe("CreateAccount", () => {
  test("submits username and password", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Account created successfully" }),
      })
    ) as jest.Mock;

    render(<CreateAccount />, { wrapper: BrowserRouter });

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: 'testuser123' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: '1234567890aa1234567890aa!' },
    });
    fireEvent.click(screen.getByRole('create-account'));

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/api/create-account',
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: { username: "testuser123", password: "1234567890aa1234567890aa!" } }),
        })
      )
    );
  });
});

describe("CreateAccount", () => { 
  test("shows error message on blank input fields", async () => {
    render(<CreateAccount />, { wrapper: BrowserRouter });
  
    fireEvent.click(screen.getByRole('create-account'));
  
    await screen.findByText('Please fill out all fields.'); // Assertion: Error message is shown
  });
});

describe("CreateAccount", () => { 
  test("shows error message on invalid username", async () => {
    const error = "Username must be between 10 and 50 characters.";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: error }),
      })
    ) as jest.Mock;
  
    render(<CreateAccount />, { wrapper: BrowserRouter });
  
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: 'short' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'Password123123121231!' },
    });
    fireEvent.click(screen.getByRole('create-account'));
  
    await screen.findByText(error); // Assertion: Error message is shown
  });
});

describe("CreateAccount", () => { 
  test("shows error message on invalid password", async () => {
    const error = "Password is too weak.";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: error }),
      })
    ) as jest.Mock;
  
    render(<CreateAccount />, { wrapper: BrowserRouter });
  
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: 'Username123' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'hhhhhhhhhhhhhhhhhhhhhhh1!' },
    });
    fireEvent.click(screen.getByRole('create-account'));
  
    await screen.findByText(error); // Assertion: Error message is shown
  });
});