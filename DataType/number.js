let x = 12e3;
console.log(x);
let y = 12e-1;
console.log(y);

/* string and string value working perfectlly arithmatic operation if that was - , * ,/.
But don't perfectlly work if that is +*/

let a = '2'- '2';
let b = '4'*'4';
let c = '5'/'23';
console.log(a , b, c);

//when add string than that is work as concating
let z = Infinity; //we can set infinity
console.log(z);

//If you covert int to string use .toString(); => that is method
let d = 12;
console.log(d.toString(2));
console.log(d.toString(8));
console.log(d.toString(16));

/*4 types of positional number => 1. Decimal 2 .Binary 3.Octal 4.HexaDecimal
we can change base using toString method passing base*/


/* Int => parseInt() , float => parseFloat() => toFixed
*/
/* isNaN => true , false => if that is number than get false else get true*/
console.log(isNaN(12));
console.log(isNaN('Dulal Miah'))

