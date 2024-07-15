function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    const numbers = expression.split(/[-+]/).map(Number);
    const operators = expression.split(/\d+/).filter(op => op);
    
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i+1];
        } else if (operators[i] === '-') {
            result -= numbers[i+1];
        }
    }
    return result;
}

console.log(evaluateExpression("4 + 6 - 2"));