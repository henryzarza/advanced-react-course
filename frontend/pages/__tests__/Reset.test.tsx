import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Reset from '../reset';

jest.mock('next/link', () => ({ children }) => children);

describe("Reset page", () => {
  it("should render page when a token is provided", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Reset query={{ token: "124-QTF" }} />
      </MockedProvider>
    );
    expect(screen.getByRole('heading', { name: /Reset Your Password/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /request reset/i })).toBeInTheDocument();
    expect(await screen.findByRole('img', { name: /Women doing exercise/i })).toBeInTheDocument();
  });

  it("should render sorry page when a token is not provided", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false} >
        <Reset query={null} />
      </MockedProvider>
    );
    expect(screen.getByRole('heading', { name: /Sorry you must supply a token/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Request Reset/i })).toBeInTheDocument();
    expect(await screen.findByRole('img', { name: /Women doing exercise/i })).toBeInTheDocument();
  });
});
