const esmImport = require("esm")(module);

describe("Hello", () => {
  test("adds 1 + 1 = 2", () => {
    expect(1 + 1).toEqual(2);
  });
});
