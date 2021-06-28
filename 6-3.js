function sumFunction(number1){ // 6.3
    return function(number2){
        return number1+number2
    }
  }
  
let number1=Math.floor(Math.random() * 100);
let number2=Math.floor(Math.random() * 100);

console.log(number1 + '+' + number2 + '=' + sumFunction(number1)(number2));
