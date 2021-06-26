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