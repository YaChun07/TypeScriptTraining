/// <reference path="../app/calculator.ts" />

describe("[TS] Jasmine test", () => {
    var calculator: Calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it("can add", () => {
        var result = calculator.add(5, 5);
        expect(10).toEqual(result);
    });

    it("subtract", () => {
        var result = calculator.subtract(5, 5);
        expect(0).toEqual(result);
    });

    it("divide", () => {
        var result = calculator.divide(5, 5);
        expect(1).toEqual(result);
    });

    it("multiply", () => {
        var result = calculator.multiply(5, 5);
        expect(25).toEqual(result);
    });

    it("Calculate 5+5 and show on screen", () => {
        var result = calculator.show(5, "add", 5);
        expect("5+5").toBe(result);
    });

    it("Calculator 5+5 and not show 10 on screen", () => {
        var result = calculator.show(5, "add", 5);
        expect("10").not.toBe(result);
    });
});