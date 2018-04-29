class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    divide(x: number, y: number): number {
        return x / y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    operatorDic = {
        "divide": "/",
        "add": "+",
        "subtract": "-",
        "multiply" : "*"
    }

    show(num: number, operator: string, num2: number): string {
        return num.toString() + this.operatorDic[operator] + num2.toString();
    }
}