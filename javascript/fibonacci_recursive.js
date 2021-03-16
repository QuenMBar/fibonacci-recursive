function recurFibonacci(num) {
    if (num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

// This one was gotten from the internet
function memoizedFib(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return num;

    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

function normalFib(num, fibArray = [0, 1]) {
    if (fibArray.length <= num) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    } else {
        return fibArray[num];
    }
    return normalFib(num, fibArray);
}

function fibonacci(num) {
    return recurFibonacci(num);
    // return memoizedFib(num);
    // return normalFib(num);
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 0");
    console.log("=>", fibonacci(0));

    console.log("");

    console.log("Expecting: 1");
    console.log("=>", fibonacci(2));

    console.log("");

    console.log("Expecting: 55");
    console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
