/// <reference path="../app/calculator.ts" />

describe("SampleApp測試", () => {
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
});