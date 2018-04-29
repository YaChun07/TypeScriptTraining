var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operatorDic = {
            "divide": "/",
            "add": "+",
            "subtract": "-",
            "multiply": "*"
        };
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };
    Calculator.prototype.show = function (num, operator, num2) {
        return num.toString() + this.operatorDic[operator] + num2.toString();
    };
    return Calculator;
}());
//# sourceMappingURL=Calculator.js.map