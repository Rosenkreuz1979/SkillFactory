/* Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль. 

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}

*/
const parser = new DOMParser();

let xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Сидор</first>
      <second>Сидоров</second>
    </name>
    <age>12</age>
    <prof>школьник</prof>
  </student>
</list>`;

class Student {
  constructor(name, age, prof) {
    this.fname = name;
    this.age = age;
    this.prof = prof;
  }
}

class List {
  constructor(student) {
    this.list = [];
    this.add = function (student) {
      this.list.push(student);
    };
  }
}

let list = new List();

let parsedXML = parser.parseFromString(xmlString, "text/xml");

let studentNode = parsedXML.querySelectorAll("student");

studentNode.forEach((student) => {
  let age = student.querySelector("age").textContent;
  let prof = student.querySelector("prof").textContent;
  let name =
    student.querySelector("first").textContent + " " + student.querySelector("second").textContent;

  if (age && prof && name) {
    let student = new Student(name, age, prof);
    list.add(student);
  }
});
console.log(list);
