module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@env/(.*)": "<rootDir>/src/environments/$1",
  },
};
