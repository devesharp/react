// jest.config.js
module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": ["ts-jest"]
  },
  testURL: "http://localhost/"
};
