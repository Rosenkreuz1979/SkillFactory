function intervalNumbers(a,b){ // 6.4
  
    let string="";
    for(let i=a;i<=b;i++) {
     string+=" " + i;
    }
      console.log(string);
   }
   
 let number1=Math.floor(Math.random() * 20);
 let number2=Math.floor(Math.random() * 20);
 
 if (number1<number2) {
   setInterval(intervalNumbers,1000,number1,number2);  
 } else {
   console.log(`Введенное начальное число ${number1} больше, чем конечное ${number2}`);
 } 