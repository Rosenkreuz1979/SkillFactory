/* 6.5 Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.*/

let number1=Math.floor(Math.random() * 100);
let number2=Math.floor(Math.random() * 100);
 
const powerOfNumber = (a,b) => Math.pow(a,b);

console.log(`${number1} в степени ${number2} = ${powerOfNumber(number1,number2)}`);