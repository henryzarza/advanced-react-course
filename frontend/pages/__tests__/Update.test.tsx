import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { SINGLE_PRODUCT_MOCK, UPDATE_PRODUCT_MOCK, SINGLE_PRODUCT_ERROR_MOCK } from '../../__mocks__/products';
import Update from '../update/[id]';

describe("Update product", () => {
  function renderWithContext() {
    return render(
      <MockedProvider mocks={[UPDATE_PRODUCT_MOCK, SINGLE_PRODUCT_MOCK]} addTypename={false} >
        <Update query={{ id: "1" }} />
      </MockedProvider>
    );
  }

  it("should filled all the fields", async () => {
    renderWithContext();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    const name = screen.getByRole('textbox', { name: /name/i });
    const price = screen.getByRole('spinbutton', { name: /Price/i });
    const description = screen.getByRole('textbox', { name: /Description/i });
    const updateBtn = screen.getByRole('button', { name: /Update product/i });

    expect(screen.getByRole('heading', { name: /Update product/i })).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(updateBtn).toBeInTheDocument();
    expect(name).toHaveValue("KITH Hoodie");
    expect(price).toHaveValue(22999);
    expect(description).toHaveValue("Love this hoodie");
  });

  it("should show fields validations", async () => {
    renderWithContext();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    const name = screen.getByRole('textbox', { name: /name/i });
    const price = screen.getByRole('spinbutton', { name: /Price/i });
    const description = screen.getByRole('textbox', { name: /Description/i });
    const updateBtn = screen.getByRole('button', { name: /Update product/i });

    expect(updateBtn).toBeInTheDocument();
    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(price, { target: { value: '' } });
    fireEvent.change(description, { target: { value: '' } });
    fireEvent.click(updateBtn);

    expect(await screen.findAllByText(/This field is required/i)).toHaveLength(3);
  });

  it("should update the product", async () => {
    renderWithContext();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    const name = screen.getByRole('textbox', { name: /name/i });
    const description = screen.getByRole('textbox', { name: /Description/i });
    const updateBtn = screen.getByRole('button', { name: /Update product/i });

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(updateBtn).toBeInTheDocument();

    fireEvent.change(name, { target: { value: 'KITH Hoodie updated' } });
    fireEvent.change(description, { target: { value: 'Love this hoodie is the best in the World' } });
    fireEvent.click(updateBtn);

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(screen.queryByText("Custom error")).not.toBeInTheDocument();
  });

  it("should show error message", async () => {
    render(
      <MockedProvider mocks={[SINGLE_PRODUCT_ERROR_MOCK]} addTypename={false} >
        <Update query={{ id: "1" }} />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(await screen.findByText("Custom error")).toBeInTheDocument();
  });
});
