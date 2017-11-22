// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number 
// and for the multiples of five print “Buzz”. For numbers which 
// are multiples of both three and five print “FizzBuzz”."

const _ = require('lodash');

_.times(100, (i) => {
  const itr = i+1;
  const divisible_by_three = (itr % 3) === 0 ? true : false;
  const divisible_by_five = (itr % 5) === 0 ? true : false;
  const divisible_by_both = (divisible_by_three === true 
                            && divisible_by_five === true) ?
                            true : false;
  if (divisible_by_both) {
    console.log('FizzBuzz');
  } else if (divisible_by_three){
    console.log('Fizz');
  } else if (divisible_by_five) {
    console.log('Buzz');
  } else {
    console.log(itr);
  }
});