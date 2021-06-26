function evenOdd() { //5.6.7
    let myArray = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), null , Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), "девятнадцать", null , Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), null, "четыре"];
    
    let arrayOdd = myArray.filter( item => item % 2 !== 0  && item !== null && item !== 0 && typeof(item) == "number");
    let arrayEven = myArray.filter( item => item % 2 == 0  && item !== null  && item !== 0 && typeof(item) == "number");
    let arrayEmpty = myArray.filter(item => !item );
    
    console.log('В случайно (почти) сгенерированном Массиве на ' + myArray.length + ' элементов:');
    console.log('\n Закрались четные элементы в количестве ' + arrayEven.length);
    console.log('\n И нечетные ' + arrayOdd.length);
    console.log('\n Пустых - ' + arrayEmpty.length);
}