import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { CURRENT_USER_MOCK } from '../../__mocks__/user';
import { ADD_TO_CART_MOCK } from '../../__mocks__/cart';
import AddToCart from '../Cart/AddToCart';
import Cart from '../Cart/Cart';
import { LocalStateProvider } from "../Cart/cartState";

describe("Cart", () => {
  it("should add to cart", () => {
    render(
      <MockedProvider mocks={[ADD_TO_CART_MOCK]} addTypename={false} >
        <AddToCart id="123" isBig />
      </MockedProvider>
    );

    const addBtn = screen.getByRole('button', { name: /add to cart/i });
    expect(addBtn).toBeInTheDocument();
    fireEvent.click(addBtn);
    expect(screen.getByRole('button', { name: /adding to cart/i })).toBeInTheDocument();
  });

  // TODO: there is a Cannot read property 'createEvent' of null error
  it.skip("should show items in cart and call closeCart funtion", async () => {
    const mockCloseCart = jest.fn();
    render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <LocalStateProvider value={{ closeCart: mockCloseCart, cartOpen: true }}>
          <Cart />
        </LocalStateProvider>
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByRole("heading", { name: "Test's cart" })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "$282.33" })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Check Out Now/i })).toBeInTheDocument();
    expect(await screen.findByTestId("backdrop")).toBeInTheDocument();
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
    expect(await screen.findByRole("heading", { name: "Airmax 270" })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "KITH Hoodie" })).toBeInTheDocument();

    // Close cart
    const closeBtn = await screen.findByRole("button", { name: /close cart/i });
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(mockCloseCart).toBeCalled();
  });

  // TODO: there is a Cannot read property 'createEvent' of null error
  it.skip("should show empty cart when there are not items", async () => {
    CURRENT_USER_MOCK.result.data.authenticatedItem.cart = [];
    render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <LocalStateProvider value={{ closeCart: jest.fn() }}>
          <Cart />
        </LocalStateProvider>
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByRole("heading", { name: "Test's cart" })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "You don't have anything in the cart yet" })).toBeInTheDocument();
  });
});
