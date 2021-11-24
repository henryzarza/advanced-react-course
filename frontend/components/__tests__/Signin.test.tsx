import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { SIGN_IN_MOCK, CURRENT_USER_MOCK } from '../../__mocks__/user';
import SignIn from '../Signin/Index';

const mockRouteChange = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: mockRouteChange
    };
  },
}));

describe("Signin", () => {
  const mockOnChange = jest.fn();
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[SIGN_IN_MOCK, CURRENT_USER_MOCK]} addTypename={false} >
        <SignIn onChange={mockOnChange} />
      </MockedProvider>
    );
  }

  it("should show fiels validations", async () => {
    renderWithContext();

    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const signInBtn = screen.getByRole('button', { name: /sign in/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signInBtn).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sick fits/i })).toBeInTheDocument();

    fireEvent.change(email, { target: { value: 'email@test' } });
    fireEvent.click(signInBtn);

    expect(await screen.findByText(/Format of email is wrong/i)).toBeInTheDocument();
    expect(await screen.findByText(/This field is required/i)).toBeInTheDocument();
  });

  it("should sign in", async () => {
    renderWithContext();

    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const signInBtn = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(email, { target: { value: 'email@test.io' } });
    fireEvent.change(password, { target: { value: 'Test12345.' } });
    fireEvent.click(signInBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(mockRouteChange).toBeCalledWith("/");
  });

  it.todo("should show authenticateUserWithPassword error");

  it.todo("should send Register link when link is clicked");

  // const linkBtn = screen.getByRole('button', { name: /have an account/i });
  // const linkBtn = screen.getByRole('button', { name: /reset password/i });

  it.todo("should send Reset link when link is clicked");
});

describe("Register", () => {
  it.todo("should show fields validations");
});

describe("RequestReset", () => {
  it.todo("should send the email when request reset button is clicked");
});

describe("Reset", () => {
  it.todo("should reset password");
});
