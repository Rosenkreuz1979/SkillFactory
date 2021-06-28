function primalityTest(number) { // 6.2
    if (number>1000 || typeof(number)!="number" || number===0){
      console.log('Вы ввели недопустимое значение. Проверьте, что вы ввели число от 1 до 1000');
    } else {
      if (number <= 3) {
          console.log(`Число ${number} простое`);
      } 
      
      if ((number % 2 === 0) || (number % 3 === 0)) {
          console.log(`Число ${number} не является простым`);     
      }
      
      let count = 5;
      let counter = false;
      
      while (Math.pow(count, 2) <= number) {
          if (number % count === 0 || number % (count + 2) === 0) 
          { 
              console.log(`Число ${number} не является простым`);
          }   else { counter = true; } 
            count += 6;
          }    
      if (counter) {
        console.log(`Число ${number} вляется простым`);
      }
     }
  }
  
  primalityTest(0);
