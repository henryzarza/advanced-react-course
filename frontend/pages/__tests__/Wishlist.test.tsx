import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { CURRENT_USER_MOCK } from "../../__mocks__/user";
import Wishlist from "../wishlist";

jest.mock('next/link', () => ({ children }) => children);

describe("Wishlist page", () => {
  it("should render wishlist items", async () => {
    render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <Wishlist />
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByRole("heading", { name: /Your Wishlist/i })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Fanorak/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /Fanorak/i })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Airmax 270/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /Airmax 270/i })).toBeInTheDocument();
  });

  it("should show empty page message", async () => {
    CURRENT_USER_MOCK.result.data.authenticatedItem.wishlist = [];
    render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <Wishlist />
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByRole("heading", { name: "There're not data yet" })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Empty concept/i })).toBeInTheDocument();
  });
});
