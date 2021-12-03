import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { CURRENT_USER_MOCK, SEARCH_PRODUCTS_QUERY_MOCK } from "../../__mocks__/user";
import Empty from "../Empty";
import ErrorMessage from "../ErrorMessage";
import Navbar from "../Navbar";
import Search from "../Search";
import { LocalStateProvider } from "../Cart/cartState";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
      push: mockPush
    };
  }
}));
jest.mock('next/link', () => ({ children }) => children);
jest.mock('lodash.debounce', () => fn => fn);

describe("Empty", () => {
  it("should return component", () => {
    render(<Empty title="Page Not Found" />);
    expect(screen.getByRole("heading", { name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByAltText(/empty concept/i)).toBeInTheDocument();
  });
});

describe("ErrorMessage", () => {
  it("should return message", () => {
    render(<ErrorMessage error={{ message: "GraphQL error: Error message" }} />);
    expect(screen.getByText(/shoot/i)).toBeInTheDocument();
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  it("should return an empty message", () => {
    render(<ErrorMessage error={{ message: null }} />);
    expect(screen.queryByRole(/error message/i)).not.toBeInTheDocument();
  });
});

describe("Navbar", () => {
  const mockOpenCart = jest.fn();
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <LocalStateProvider value={{ openCart: mockOpenCart }}>
          <Navbar />
        </LocalStateProvider>
      </MockedProvider>
    );
  }

  it("should render links, searcher, and cart when user is logged", async () => {
    renderWithContext();
    // expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sick fits/i })).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Sign out/i })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Open cart/i })).toBeInTheDocument();
    // links
    expect(await screen.findByText("Orders")).toBeInTheDocument();
    expect(await screen.findByText("Sell")).toBeInTheDocument();
    expect(await screen.findByText("Wishlist")).toBeInTheDocument();
    // Searcher is visible
    expect(await screen.findByRole("searchbox")).toBeInTheDocument();
    expect(await screen.findByRole("combobox")).toBeInTheDocument();
    expect(await screen.findByRole("listbox")).toBeInTheDocument();
    // Cart sidebar is visible
    expect(await screen.findByRole("heading", { name: "$282.33" })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Check Out Now/i })).toBeInTheDocument();
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });

  // TODO: I don't know how to mock only a pathname response
  it.skip("should hide searcher when the current page is wishlist", async () => {
    jest.mock("next/router", () => ({
      useRouter() {
        return { pathname: "/wishlist" };
      }
    }));
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    renderWithContext();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    // Searcher is not visible
    expect(await screen.queryByRole("searchbox")).not.toBeInTheDocument();
    expect(await screen.queryByRole("combobox")).not.toBeInTheDocument();
    expect(await screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("should show Sign In link", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <LocalStateProvider value={{ openCart: jest.fn() }}>
          <Navbar />
        </LocalStateProvider>
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sick fits/i })).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  it("should open shopping cart", async () => {
    renderWithContext();
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const openCart = await screen.findByRole("button", { name: /Open cart/i });
    expect(openCart).toBeInTheDocument();
    fireEvent.click(openCart);
    expect(mockOpenCart).toBeCalled();
  });
});

describe("Search", () => {
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[SEARCH_PRODUCTS_QUERY_MOCK]} addTypename={false}>
        <Search />
      </MockedProvider>
    );
  }

  // TODO: there is an act() error that should be fixed
  it("should show results and navigate when an item is selected", async () => {
    renderWithContext();

    const input = screen.getByRole("searchbox");
    expect(input).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(input, { target: { value: 'test ' } });

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findAllByRole("img")).toHaveLength(2);
    expect(await screen.findAllByText(/test/i)).toHaveLength(2);

    fireEvent.keyDown(input, { key: "ArrowDown", code: 40 });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(mockPush).toBeCalledWith({ "pathname": "/product/1" });
  });

  it("should sorry message when there are not items", async () => {
    renderWithContext();

    const input = screen.getByRole("searchbox");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByText(/Sorry/i)).toBeInTheDocument();
  });
});
