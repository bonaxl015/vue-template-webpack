import { jest } from '@jest/globals';

global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn()
};

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
