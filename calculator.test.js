const { add, multiply, subtract, divide, square, cube } = require("./calculator");
//const { multiply } = require("./calculator");

//Basic tests:
test("add two numbers: 10+5 = 15", () => {

    expect(add(10, 5)).toBe(15); //fixed

});

test('multiply two numbers: 10*5 = 50', () => {
    expect(multiply(10, 5)).toBe(50);
});

test("subtract 2 numbers: 10-5 = 5", () => {

    expect(subtract(10, 5)).toBe(5);

});

test("divide 2 numbers: 10/5 = 2", () => {

    expect(divide(10, 5)).toBe(2);

});

test("divide by 0: 10/0 = undefined", () => {

    expect(divide(10, 0)).toBe(undefined);

});

test("square of a number: 4**2 = 16", () => {

    expect(square(4)).toBe(16);

});

test("cube of a number: 3**3 = 27", () => {

    expect(cube(3)).toBe(27);

});

// Task 3: Negative number tests

test("add two negative numbers: -2+-3 = -5", () => {

    expect(add(-2, -3)).toBe(-5);

});

test("subtract two negative numbers: -10--5 = -5", () => {

    expect(subtract(-10, -5)).toBe(-5);

});

test("multiply with a negative number: -5*4 = -20", () => {

    expect(multiply(-5, 4)).toBe(-20);

});

test("multiply with zero: 0*10 = 0", () => {

    expect(multiply(0, 10)).toBe(0);

});

test("divide with numerator as zero: 0/5 = 0", () => {

    expect(divide(0, 5)).toBe(0);

});