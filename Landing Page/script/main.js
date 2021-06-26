function numberCheck () { // 5.3.1
    let number = +(prompt('Введите значение:'));

    if (isNaN(number)) {
        console.log('Кажется, вы ошиблись, введенное значение - не число');        
    } else if (number%2===0) {
        console.log('Введенное значение - четное');
    } else {
        console.log('Введенное значение - нечетное');
    }
    
}

function typeCheck () { // 5.3.2
    let myArray=[12,"Some text",true,undefined];
    let value=myArray[Math.floor(Math.random() * 4)];
    switch (typeof(value)) {
        case "boolean":
            console.log (value + ' является логическим значением');
            break;
        case "number":
            console.log (value + ' является числом');
            break;
        case "string":
            console.log (value + ' является строкой');
            break;
        default:
            console.log ('Тип ' + value + ' не определен');
    }
}

function reverseString() { // 5.4.3
    let str=prompt('Введите строку');
    console.log (str.split("").reverse().join(""));
}

function randomNumber () { // 5.4.4
    let rnumber=Math.floor(Math.random() * 100);
    console.log('В лабиринты сознания записано число ' + rnumber);
}

function arrayWork (array) { // 5.5.5
    let myArray = new Array();
    if (array==undefined) {
        myArray = ["Зуул'Гот","Каракот","Дурной глаз","Неуязвимость","Материализация", 47, 71, 83, "Красный", "Синий", "Фиолетовый", 32, "Уничтожение", true, false, true];
        console.log('Длина Массива (кол-во элементов) - ' + myArray.length);

    } else {
        myArray=array;
    }

    myArray.forEach(function(item,index){
        console.log(index + " : " + item + " : " + typeof(item));
    })
}

function checkEquality() { // 5.6.6
    let myArray=["Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость"];
    if (myArray.every( (val, i, arr) => val === arr[0] )){
        console.log("В массиве из " + myArray.length + " элементов все одинаковые.");
    } else {
        console.log("В массиве из " + myArray.length + " элементов есть отличающиеся.");                
    }
    arrayWork(myArray);
}

function evenOdd() { //5.6.7
    let myArray = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), null , Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), "девятнадцать", null , Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), null, "четыре"];
    
    let arrayOdd = myArray.filter( item => item % 2 !== 0  && item !== null && item !== 0 && typeof(item) == "number");
    let arrayEven = myArray.filter( item => item % 2 == 0  && item !== null  && item !== 0 && typeof(item) == "number");
    let arrayEmpty = myArray.filter(item => !item );
    
    console.log('В случайно (почти) сгенерированном Массиве на ' + myArray.length + ' элементов:');
    arrayWork(myArray);
    console.log('\n Закрались четные элементы в количестве ' + arrayEven.length);
    arrayWork(arrayEven);
    console.log('\n И нечетные ' + arrayOdd.length);
    arrayWork(arrayOdd);
    console.log('\n Пустых - ' + arrayEmpty.length);
    arrayWork(arrayEmpty);

}

function mappWork(){
let carList = new Map();
carList.set('red', 'T50');
carList.set( 'green', 21);
carList.set('yellow', 'Rs5');
carList.set( 'white', true);
carList.forEach(function(key,value){
    console.log(key + " - X" + "\n" + value + " - Y");
})
}

function mapWork () {
    let myMap=new Map([["Color Blue",true],["Color Green",true],["Color Yellow",true],["Color Purple",false], ["Name of Item","Artifact"], ["Time of Creation", 1624717614]]);

    myMap.forEach(function(item,index){
        console.log(`${index} - X ${item} - Y`);

    })

}