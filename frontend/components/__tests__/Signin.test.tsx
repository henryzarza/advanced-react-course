import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { SIGN_IN_MOCK, CURRENT_USER_MOCK, REGISTER_MOCK, REQUEST_RESET_MOCK, RESET_MUTATION_MOCK } from '../../__mocks__/user';
import SignIn from '../Signin/Index';
import Register from '../Signin/Register';
import RequestReset from '../Signin/RequestReset';
import Reset from '../Signin/Reset';
import { SCREENS } from '../Signin/constant';

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
  function renderWithContext(signInMock = SIGN_IN_MOCK) {
    return render(
      <MockedProvider mocks={[signInMock, CURRENT_USER_MOCK]} addTypename={false} >
        <SignIn onChange={mockOnChange} />
      </MockedProvider>
    );
  }

  it("should show fields validations", async () => {
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

  it("should show authenticateUserWithPassword error", async () => {
    const mock = { ...SIGN_IN_MOCK };
    mock.result.data.authenticateUserWithPassword.code = "FAILURE";
    mock.result.data.authenticateUserWithPassword.message = "Error message";
    renderWithContext(mock);

    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const signInBtn = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(email, { target: { value: 'email@test.io' } });
    fireEvent.change(password, { target: { value: 'Test12345.' } });
    fireEvent.click(signInBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByText(/Error message/i)).toBeInTheDocument();
  });

  it("should send Register link when link is clicked", () => {
    renderWithContext();
    const registerBtn = screen.getByRole('button', { name: /have an account/i });
    expect(registerBtn).toBeInTheDocument();
    fireEvent.click(registerBtn);
    expect(mockOnChange).toBeCalledWith(SCREENS.REGISTER);
  });

  it("should send Reset link when link is clicked", () => {
    renderWithContext();
    const linkBtn = screen.getByRole('button', { name: /reset password/i });
    expect(linkBtn).toBeInTheDocument();
    fireEvent.click(linkBtn);
    expect(mockOnChange).toBeCalledWith(SCREENS.RESET_PASSWORD);
  });
});

describe("Register", () => {
  const mockOnChange = jest.fn();
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[REGISTER_MOCK, CURRENT_USER_MOCK]} addTypename={false} >
        <Register onChange={mockOnChange} />
      </MockedProvider>
    );
  }

  it("should show fields validations", async () => {
    renderWithContext();

    const name = screen.getByRole('textbox', { name: /name/i });
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const signUpBtn = screen.getByRole('button', { name: /sign up/i });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signUpBtn).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sick fits/i })).toBeInTheDocument();

    fireEvent.change(name, { target: { value: '12' } });
    fireEvent.change(email, { target: { value: 'email@test' } });
    fireEvent.click(signUpBtn);

    expect(await screen.findByText(/Format of email is wrong/i)).toBeInTheDocument();
    expect(await screen.findByText(/The length should be greater than/i)).toBeInTheDocument();
    expect(await screen.findByText(/This field is required/i)).toBeInTheDocument();
  });

  it("should sign up", async () => {
    renderWithContext();

    const name = screen.getByRole('textbox', { name: /name/i });
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const signUpBtn = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(name, { target: { value: 'User Test' } });
    fireEvent.change(email, { target: { value: 'email@test.io' } });
    fireEvent.change(password, { target: { value: 'Test12345.' } });
    fireEvent.click(signUpBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(mockRouteChange).toBeCalledWith("/signin");
  });

  it("should send sign in link when link is clicked", () => {
    renderWithContext();
    const signInBtn = screen.getByRole('button', { name: /I already have an account/i });
    expect(signInBtn).toBeInTheDocument();
    fireEvent.click(signInBtn);
    expect(mockOnChange).toBeCalledWith(SCREENS.SIGN_IN);
  });
});

describe("RequestReset", () => {
  const mockOnChange = jest.fn();
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[REQUEST_RESET_MOCK, CURRENT_USER_MOCK]} addTypename={false} >
        <RequestReset onChange={mockOnChange} />
      </MockedProvider>
    );
  }

  it("should show email validation", async () => {
    renderWithContext();

    const resetBtn = screen.getByRole('button', { name: /request reset/i });

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sick fits/i })).toBeInTheDocument();
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);

    expect(await screen.findByText(/This field is required/i)).toBeInTheDocument();
  });

  it("should send the email when request reset button is clicked", async () => {
    renderWithContext();

    const email = screen.getByRole('textbox', { name: /email/i });
    const resetBtn = screen.getByRole('button', { name: /request reset/i });

    fireEvent.change(email, { target: { value: 'email@test.io' } });
    fireEvent.click(resetBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByText(/¡Success! Check your email for a link/i)).toBeInTheDocument();
  });

  it("should send sign in link when link is clicked", () => {
    renderWithContext();
    const signInBtn = screen.getByRole('button', { name: /Return to Login/i });
    expect(signInBtn).toBeInTheDocument();
    fireEvent.click(signInBtn);
    expect(mockOnChange).toBeCalledWith(SCREENS.SIGN_IN);
  });
});

describe("Reset", () => {
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[RESET_MUTATION_MOCK, CURRENT_USER_MOCK]} addTypename={false} >
        <Reset token="qwerty-123" />
      </MockedProvider>
    );
  }

  it("should show email validation", async () => {
    renderWithContext();

    const resetBtn = screen.getByRole('button', { name: /request reset/i });

    expect(screen.getByRole('heading', { name: /Reset Your Password/i })).toBeInTheDocument();
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);

    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(2);
  });

  it("should reset password when request reset button is clicked", async () => {
    renderWithContext();

    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const requestBtn = screen.getByRole('button', { name: /request reset/i });

    fireEvent.change(email, { target: { value: 'email@test.io' } });
    fireEvent.change(password, { target: { value: 'Test12345.' } });
    fireEvent.click(requestBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByText(/¡Success! You can now sign in/i)).toBeInTheDocument();
  });
});
