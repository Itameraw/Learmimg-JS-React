// 1) Створити ф-ію конструктор Calculator та до її прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator
// (наслідує методи від Calculator) та до її прототипу добавити два методи multiply(a,b) та divide(a,b)

function Calculator() {}

Calculator.prototype.sum = (a, b) => a + b;
Calculator.prototype.subtract = (a, b) => a - b;
function AdvancedCalculator() {}
AdvancedCalculator.prototype = Object.create(Calculator);
AdvancedCalculator.prototype.multiply = (a, b) => a * b;
AdvancedCalculator.prototype.divide = (a, b) => a / b;
console.dir(Calculator);
console.dir(AdvancedCalculator);
const calculator = new Calculator();
console.log(calculator.sum(5, 4));
