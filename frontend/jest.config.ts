import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testTimeout: 30000,
  setupFiles: [
    "@testing-library/react/dont-cleanup-after-each"
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  }
};

export default config;
