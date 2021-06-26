function checkEquality() { // 5.6.6
    let myArray=["Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость","Дикость"];
    if (myArray.every( (val, i, arr) => val === arr[0] )){
        console.log("В массиве из " + myArray.length + " элементов все одинаковые.");
    } else {
        console.log("В массиве из " + myArray.length + " элементов есть отличающиеся.");                
    }
}