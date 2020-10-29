module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^components(.*)": "<rootDir>/src/components$1",
    "^mocks(.*)": "<rootDir>/src/mocks/$1",
    "^utils(.*)": "<rootDir>/src/utils/$1",
    "^store(.*)": "<rootDir>/src/store/$1",
    "^services(.*)": "<rootDir>/src/services/$1",
  }
};
