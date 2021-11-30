import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { USER_ORDERS_MOCK, USER_ORDERS_ERROR_MOCK, SINGLE_ORDER_MOCK } from "../../__mocks__/orders";
import Orders from "../orders";
import Order from "../order/[id]";

jest.mock('next/link', () => ({ children }) => children);

describe("Orders", () => {
  it("should show all user orders", async () => {
    render(
      <MockedProvider mocks={[USER_ORDERS_MOCK]} addTypename={false}>
        <Orders />
      </MockedProvider>
    );
    expect(screen.getByRole("heading", { name: /loading/i })).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const links = await screen.findAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/order/6080a93773332d310a94fd53');
    expect(await screen.findByText(/3 items/i)).toBeInTheDocument();
    expect(await screen.findByText(/3 products/i)).toBeInTheDocument();
    expect(await screen.findByText(/3,504.48/i)).toBeInTheDocument();
    expect(await screen.findAllByRole("img", { name: /Goose/i })).toHaveLength(2);
    expect(await screen.findByRole("img", { name: /KITH Hoodie/i })).toBeInTheDocument();
    expect(await screen.findByRole("img", { name: /Fanorak/i })).toBeInTheDocument();
  });

  it("should show empty order message", async () => {
    USER_ORDERS_MOCK.result.data.allOrders = [];
    render(
      <MockedProvider mocks={[USER_ORDERS_MOCK]} addTypename={false}>
        <Orders />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByText("You don't have orders yet")).toBeInTheDocument();
  });

  it("should show error message", async () => {
    render(
      <MockedProvider mocks={[USER_ORDERS_ERROR_MOCK]} addTypename={false}>
        <Orders />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByText("Custom error")).toBeInTheDocument();
  });
});

describe("Order", () => {
  it("should show a specific user order", async () => {
    render(
      <MockedProvider mocks={[SINGLE_ORDER_MOCK]} addTypename={false}>
        <Order query={{ id: "1" }} />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByRole("heading", { name: /Order detail/i })).toBeInTheDocument();
    expect(await screen.findByText("pi_1IiohrFef7P7DnVR83eR1iFU")).toBeInTheDocument();
    expect(await screen.findAllByText("$745.44")).toHaveLength(3);
    expect(await screen.findByRole("img", { name: /Goose/i })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /Goose/i })).toBeInTheDocument();
    expect(await screen.findByText("Keep warm.")).toBeInTheDocument();
  });

  it("should show error message", async () => {
    render(
      <MockedProvider mocks={[USER_ORDERS_ERROR_MOCK]} addTypename={false}>
        <Order query={{ id: "1" }} />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(await screen.findByText("Shoot!")).toBeInTheDocument();
  });
});
