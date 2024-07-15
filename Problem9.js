function evenNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
}

const numbers = [1,2,3,4,5,6];
const oddNumbers = evenNumbers(numbers);
console.log(oddNumbers);