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

//test code provided
let op = get_args()
console.log("The first operand is: ", op[0]);
console.log("The second operand is: ", op[2]);
console.log("The operator is: ", op[1]);

/*
Test Case 1
Input: node romancalc.js 4.4 / 4
Output: 
The first operand is:  4.4
The second operand is:  4
The operator is: /

Test Case 2
Input:node romancalc.js 2 r to
Output:
The first operand is:  2
The second operand is:  to
The operator is:  r
*/