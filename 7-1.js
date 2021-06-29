/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */
const human = {
    height: 0,
    weight: 0,
    gender: undefined,
    planet: "Earth"
}

let person = Object.create(human);

person.weight = 85;
person.height = 185;
person.gender = "male";
person.skin = "black";
person.hair = "bald";
person.name = "Ivan";
person.city = "Novosibirsk";
person.age = 35;

function personInfo(person) {
    for (let index in person) {
        if (person.hasOwnProperty(index)){
            console.log(`${index} : ${person[index]}`)
        }
    }
}