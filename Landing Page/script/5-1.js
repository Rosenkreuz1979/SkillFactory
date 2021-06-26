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