/// <reference path="../app/calculator.ts" />
describe("SampleApp測試", function () {
    var calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    it("can add", function () {
        var result = calculator.add(5, 5);
        expect(10).toEqual(result);
    });
    it("subtract", function () {
        var result = calculator.subtract(5, 5);
        expect(0).toEqual(result);
    });
    it("divide", function () {
        var result = calculator.divide(5, 5);
        expect(1).toEqual(result);
    });
    it("multiply", function () {
        var result = calculator.multiply(5, 5);
        expect(25).toEqual(result);
    });
});
//# sourceMappingURL=CalculatorTest.js.map