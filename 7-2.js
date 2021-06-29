/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

const human = {
    height: 0,
    weight: 0,
    gender: undefined,
    planet: "Earth"
  };
  
  let person = Object.create(human);
  
  person.weight = 85;
  person.height = 185;
  person.gender = "male";
  person.skin = "black";
  person.hair = "bald";
  person.name = "Ivan";
  person.city = "Novosibirsk";
  person.age = 35;
  
  function checkFeature(person, feature) {
    if (!feature) {
      console.log("Введите искомое свойство.");
    } else {
      let found = false;
      if (feature in person) {
        found = true;
      }
      console.log(found);
    }
  }
  
  checkFeature(person, "position");
  checkFeature(person, "age");