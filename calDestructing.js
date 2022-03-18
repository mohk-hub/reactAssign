function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiple = a * b;
    const divide = a / b;
  
    return [add, subtract, multiple, divide];
  }
  
  const [add, subtract, multiple, divide] = calculate(4, 7);

  console.log(add);
  console.log(subtract);
  console.log(multiple);
  console.log(divide);
