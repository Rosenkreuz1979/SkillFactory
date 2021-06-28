let number1=Math.floor(Math.random() * 100);
let number2=Math.floor(Math.random() * 100);
 
const powerOfNumber = (a,b) => Math.pow(a,b);

console.log(`${number1} в степени ${number2} = ${powerOfNumber(number1,number2)}`);