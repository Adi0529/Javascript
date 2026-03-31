const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b ,
  divide: (a, b) => b !== 0 ? a / b : "Error"
}
function calculate(operation) {
  const val1 = Number(document.getElementById('input1').value);
  const val2 = Number(document.getElementById('input2').value);
  
  const result = calculator[operation](val1, val2);
  
  document.getElementById('result').innerText = `Result: ${result}`;
}