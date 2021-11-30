import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { CURRENT_USER_MOCK } from '../../__mocks__/user';
import { ADD_TO_CART_MOCK } from '../../__mocks__/cart';
import AddToCart from '../Cart/AddToCart';
import Cart from '../Cart/Cart';
import { LocalStateProvider } from "../Cart/cartState";

/* const mockRouteChange = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: mockRouteChange
    };
  },
})); */

describe("Cart", () => {
  it("should add to cart", async () => {
    render(
      <MockedProvider mocks={[ADD_TO_CART_MOCK]} addTypename={false} >
        <AddToCart id="123" isBig />
      </MockedProvider>
    );

    const addBtn = screen.getByRole('button', { name: /add to cart/i });
    expect(addBtn).toBeInTheDocument();
    fireEvent.click(addBtn);
    expect(screen.getByRole('button', { name: /adding to cart/i })).toBeInTheDocument();

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  });

  it.skip("should show items in cart", async () => {
    const mockCartOpen = jest.fn();
    const mockCloseCart = jest.fn();
    render(
      <MockedProvider mocks={[CURRENT_USER_MOCK]} addTypename={false}>
        <LocalStateProvider value={{ cartOpen: mockCartOpen, closeCart: mockCloseCart }}>
          <Cart />
        </LocalStateProvider>
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(screen.getByRole("heading", { name: /Test's cart/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /x/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /282.33/i })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Check Out Now/i })).toBeInTheDocument();

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    const random = within(listItems[0]).getByRole("img", { name: /Airmax 270/i });
    console.log('----random----', random);
    /* within(listItems[0]).getByRole("heading", { name: /Airmax 270/i });
    within(listItems[0]).getByText(/52.34 each/i);
    within(listItems[0]).getByRole("button", { name: /x/i }); */
  });

  it.todo("should show empty cart when there are not items");

  it.todo("should remove item from cart");
});
