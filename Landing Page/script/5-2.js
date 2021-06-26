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