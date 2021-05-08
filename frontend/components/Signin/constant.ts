import { ERROR_MESSAGES } from '../../lib/errorMessages';

export const FIELD_NAMES = {
  NAME: 'name',
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_REPEAT: 'passwordRepeat',
};

export const VALIDATION_SCHEMA = {
  EMAIL: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 60,
      message: `${ERROR_MESSAGES.maxLength} 60`,
    },
    minLength: {
      value: 5,
      message: `${ERROR_MESSAGES.minLength} 5`,
    },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/,
      message: ERROR_MESSAGES.email,
    },
  },
  PASSWORD: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 60,
      message: `${ERROR_MESSAGES.maxLength} 60`,
    },
    minLength: {
      value: 8,
      message: `${ERROR_MESSAGES.minLength} 8`,
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      message: ERROR_MESSAGES.password,
    },
  },
  PASSWORD_REPEAT: {
    required: ERROR_MESSAGES.required,
  },
  NAME: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 75,
      message: `${ERROR_MESSAGES.maxLength} 75`,
    },
    minLength: {
      value: 3,
      message: `${ERROR_MESSAGES.minLength} 3`,
    },
  },
};