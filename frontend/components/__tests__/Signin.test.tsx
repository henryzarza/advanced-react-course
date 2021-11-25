import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { SIGN_IN_MOCK, CURRENT_USER_MOCK } from '../../__mocks__/user';
import SignIn from '../Signin/Index';
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
  it.todo("should show fields validations");
});

describe("RequestReset", () => {
  it.todo("should send the email when request reset button is clicked");
});

describe("Reset", () => {
  it.todo("should reset password");
});
