function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  function showFactorial() {
    const num = parseInt(document.getElementById("factInput").value);
    const result = factorial(num);
    document.getElementById("factResult").innerText = "Factorial: " + result;
  }
  
  function sortArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);
    const sorted = sortArrayAscending(arr);
    document.getElementById("sortResult").innerText = "Sorted Array: " + sorted.join(", ");
  }
  