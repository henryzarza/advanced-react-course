import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import SignIn from '../signin';

describe("Signin page", () => {
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[]} addTypename={false} >
        <SignIn />
      </MockedProvider>
    );
  }

  it("should render sign in page", async () => {
    renderWithContext();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sick fits/i })).toBeInTheDocument();
    expect(await screen.findByRole('img', { name: /Women doing exercise/i })).toBeInTheDocument();
  });

  it("should render register page", async () => {
    renderWithContext();
    const registerBtn = screen.getByRole('button', { name: /have an account/i });
    expect(registerBtn).toBeInTheDocument();

    fireEvent.click(registerBtn);

    expect(await screen.findByRole('img', { name: /Women doing exercise/i })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /sick fits/i })).toBeInTheDocument();
    expect(await screen.findByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it("should render reset password page", async () => {
    renderWithContext();
    const resetBtn = screen.getByRole('button', { name: /reset password/i });
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);

    expect(await screen.findByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /sick fits/i })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /request reset/i })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /return to login/i })).toBeInTheDocument();
  });
});
