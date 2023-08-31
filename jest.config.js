module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
