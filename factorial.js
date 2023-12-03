function calculate() {
  var number = parseInt(document.getElementById("number").value);
  var factorial = 1;
  var sum = 0;

  // factorial (while loop)
  var i = 1;
  while (i <= number) {
    factorial *= i;
    i++;
  }

  // sum (do-while loop)
  i = 1;
  do {
    sum += i;
    i++;
  } while (i <= number);

  // verage (for loop)
  var average = 0;
  for (i = 1; i <= number; i++) {
    average += i;
  }
  average /= number;

  // results
  document.getElementById("factorialResult").innerText =
    "Factorial: " + factorial;
  document.getElementById("sumResult").innerText = "Sum: " + sum;
  document.getElementById("averageResult").innerText =
    "Average: " + average.toFixed(2);
}
