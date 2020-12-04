/*
Frederick Uy
Roman Calculator
For This program I will create a function that gets arguments from the user and returns the arguments. 
I will only focus on getting and storing the arguments for future use.
*/

//initialize the first three functions that will be utilized to get value from user. 
//get_args is utilized to get argument from user 
function get_args(operand1st, operand2nd, operator){
    //initialize first variable
    var operand1st = process.argv[2];
    //initialize second variable
    var operand2nd = process.argv[3];
    //initialize third variable
    var operator = process.argv [4];
    //returns the value from insiude an argument.
   let array =  [operand1st, operand2nd, operator]
    return (array);
}

//Phase 2
//calculate the answer
function calculate() { 
    //gets values from the array in phase 1
    var array = get_args();
    var a = Number(array[0]);
    var b = Number(array[2]);
    var operator = (array[1]);

    //initialize variable answer which will store the answer
    var answer = 0;

    if(operator === '+') {
        answer = a + b;
    } else if(operator === '-') {
        answer = a - b;
    } else if(operator === 'x') {
        answer = a * b;
    } else if(operator === '/') {
        answer= a / b;
    } else if(operator === '^') {
        answer = a ** b;
    } else {
        answer = a % b;
    }

    return answer;
  }
  console.log(calculate());

/*
Testing
Add console.log(calculate()); to the end of your code
Run node romancalc.js a b c

Test Cases:

Input: node romancalc.js 98 + 94

Output: 192

Input: node romancalc.js 22 - 95

Output: -73

Input: node romancalc.js 53 x 48

Output: 2544

Input: node romancalc.js 25 / 84

Output: 0.2976190476190476

Input: node romancalc.js 5 ^ 4

Output: 625

Input: node romancalc.js 143 % 7

Output: 3

*/