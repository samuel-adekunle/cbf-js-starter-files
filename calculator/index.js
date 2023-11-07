const operators = (() => {
  const binaryOperatorFactory = ({ operation }) => {
    const operate = (a, b) => operation(a, b)
    return { operate }
  }

  const add = binaryOperatorFactory({
    operation: (a, b) => a + b,
  })

  const subtract = binaryOperatorFactory({
    operation: (a, b) => a - b,
  })

  const multiply = binaryOperatorFactory({
    operation: (a, b) => a * b,
  })

  const divide = binaryOperatorFactory({
    operation: (a, b) => a / b,
  })
  return { add, subtract, multiply, divide }
})();

const calculator = (() => {
  const calculatorFactory = ({ operators }) => {
    const calculate = (operation, a, b) => {
      return operators[operation].operate(a, b)
    }
    return { calculate }
  }

  return calculatorFactory({ operators })
})();

console.log("1 + 2 =", calculator.calculate("add", 1, 2))
console.log("1 - 2 =", calculator.calculate("subtract", 1, 2))
console.log("1 * 2 =", calculator.calculate("multiply", 1, 2))
console.log("1 / 2 =", calculator.calculate("divide", 1, 2))