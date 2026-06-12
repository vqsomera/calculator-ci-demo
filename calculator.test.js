const { add } = require("./calculator");
const { multiply } = require("./calculator");


test("adds 2+3", () => {

    expect(add(2, 3)).toBe(5);

});

test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
});