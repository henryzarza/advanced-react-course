import { ERROR_MESSAGES } from './errorMessages';

export const SELL_FIELD_NAMES = {
  NAME: 'name',
  PRICE: 'price',
  DESCRIPTION: 'description',
  IMAGE: 'image'
};

export const SELL_VALIDATION_SCHEMA = {
  PRICE: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 6,
      message: `${ERROR_MESSAGES.maxLength} 6`,
    }
  },
  DESCRIPTION: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 1000,
      message: `${ERROR_MESSAGES.maxLength} 1000`,
    },
    minLength: {
      value: 30,
      message: `${ERROR_MESSAGES.minLength} 30`,
    }
  },
  NAME: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 100,
      message: `${ERROR_MESSAGES.maxLength} 100`,
    },
    minLength: {
      value: 3,
      message: `${ERROR_MESSAGES.minLength} 3`,
    },
  },
  IMAGE: {
    required: ERROR_MESSAGES.required
  }
};