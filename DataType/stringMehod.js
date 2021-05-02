let str1 = 'Akash Vora tara';
let str2 = 'I am very rich man in this world';

//charAt => find character with index point
console.log(str1.charAt(4));

//charCodeAt() => return unicode specific index point
console.log(str1.charCodeAt(1));

//concat => add two string

console.log(str1.concat(str2));

//endsWith return true , false
console.log(str2.endsWith('worls'));

//fromCharCode() => Unicode to char

console.log(String.fromCharCode(113));

//includes() => if string or char is here return true

console.log(str2.includes('man'));

  //indexOf()
console.log(str2.indexOf('a'));