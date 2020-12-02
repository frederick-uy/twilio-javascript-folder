/*
Frederick Uy
FizzBuzz In Space
This program will go through numbers 1 to 100 and print 👽if divisible by 3, print 🚀 if divisible by 5, print 🛰 
if divisible by 3 and by and print 💩 if it is not divisible by 3 or 5.
*/

//This will get value from terminal 1 to 100
const numbervalue = process.argv[2];
const numvalue = Number(numbervalue);

//Initialize the variables that is going to be utilized
var number;
var sticker;

//Created a loop that counts from 1 to the given integer that increases by 1
    for (number = "a "; number <= numvalue; number ++){

    //print 👽 and the number if it is divisible by 3
    if (number % 3 === 0) {
        sticker = "👽 ";

        //print 🚀 and the number if it is divisible by 5
    } else if (number % 5 === 0) {
        sticker = "🚀";

        //print 🛰 and the number if it is divisible by both 3 and 5
    } else if (number % 3 === 0 && number % 5 === 0) {
        sticker =  "🛰 ";

        //print 💩 and the number if it is not divisible by either 3 or 5
    } else {
        sticker = "💩 ";
    }

    //this prints out the number and the sticker given
    console.log (sticker + "number" + number);

}