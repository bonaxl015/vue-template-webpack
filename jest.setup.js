import { jest } from '@jest/globals';

global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn()
};

jest.mock('vuetify', () => ({
  useTheme: jest.fn(() => ({
    global: {
      current: { value: { dark: false } },
      name: { value: 'light' },
    },
  })),
}));
