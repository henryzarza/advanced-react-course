import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { SINGLE_ITEM_ERROR_MOCK, SINGLE_ITEM_MOCK } from "../../__mocks__/products";
import Product from "../product/[id]";

describe("Product page", () => {
  it("should render specific product", async () => {
    render(
      <MockedProvider mocks={[SINGLE_ITEM_MOCK]} addTypename={false}>
        <Product query={{ id: "1" }} />
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByRole("img", { name: /Love this hoodie/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /KITH Hoodie/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "$229.99" })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Add to cart/i })).toBeInTheDocument();
  });

  it("should show product error message", async () => {
    render(
      <MockedProvider mocks={[SINGLE_ITEM_ERROR_MOCK]} addTypename={false}>
        <Product query={{ id: "1" }} />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByText(/Shoot/i)).toBeInTheDocument();
  });
});
