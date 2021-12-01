import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { ALL_PRODUCTS_MOCK, PAGINATION_QUERY_MOCK } from "../../__mocks__/products";
import { CURRENT_USER_MOCK } from '../../__mocks__/user';
import IndexPage from "../index";
import NotFoundPage from "../404";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { page: "1" }
    };
  }
}));
jest.mock('next/link', () => ({ children }) => children);
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {}
});

describe("Index page", () => {
  it("should render index page", async () => {
    render(
      <MockedProvider mocks={[ALL_PRODUCTS_MOCK, PAGINATION_QUERY_MOCK, CURRENT_USER_MOCK]} addTypename={false}>
        <IndexPage />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    // Main
    expect(await screen.findByRole("heading", { name: /High-Quality Equipment Just for you/i })).toBeInTheDocument();
    // Feature
    expect(await screen.findByRole("img", { name: /Trophy/i })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Guarantee/i })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Shipping/i })).toBeInTheDocument();
    // OurProducts
    expect(await screen.findByRole("heading", { name: /Our Products/i })).toBeInTheDocument();
    expect(await screen.findAllByRole("button", { name: /add to cart/i })).toHaveLength(8);
    // Pagination
    expect(await screen.getByTestId('pagination')).toBeInTheDocument();
    // Share
    expect(await screen.findByRole("heading", { name: /Share your progress with/i })).toBeInTheDocument();
  });

  it("should render 404 page", () => {
    render(<NotFoundPage />);
    expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument();
    expect(screen.getByAltText(/empty concept/i)).toBeInTheDocument();
  });
});
