import formatMoney, { calcTotalPrice } from '../formatMoney';
import { SELL_VALIDATION_SCHEMA } from '../formValidations';
import { ERROR_MESSAGES } from '../errorMessages';

describe("Lib files ", () => {
  it("should format money", () => {
    expect(formatMoney(1234)).toEqual("$12.34");
    expect(formatMoney(20)).toEqual("$0.20");
    expect(formatMoney(100)).toEqual("$1");
    expect(formatMoney()).toEqual("$0");
  });

  it("should calculate total price", () => {
    const MOCK_PRODUCTS = [
      {
        quantity: 2,
        product: {
          price: 100
        }
      },
      {
        quantity: 1,
        product: {
          price: 50
        }
      },
      {
        quantity: 3,
        product: {
          price: 50
        }
      }
    ];
    expect(calcTotalPrice(MOCK_PRODUCTS)).toEqual(400);
  });

  it("should return a correct SELL_VALIDATION_SCHEMA", () => {
    expect(SELL_VALIDATION_SCHEMA.PRICE).toEqual({
      required: ERROR_MESSAGES.required,
      maxLength: {
        value: 6,
        message: `${ERROR_MESSAGES.maxLength} 6`
      }
    });
    expect(SELL_VALIDATION_SCHEMA.NAME).toEqual({
      required: ERROR_MESSAGES.required,
      maxLength: {
        value: 100,
        message: `${ERROR_MESSAGES.maxLength} 100`
      },
      minLength: {
        value: 3,
        message: `${ERROR_MESSAGES.minLength} 3`
      }
    });
  });
});
