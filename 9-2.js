/* Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль. 

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}

*/
let jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Ivan",
      "age": "28",
      "prof": "engineer"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
  
  class Student {
    constructor(name, age, prof) {
      this.name = name;
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
  
  let students = JSON.parse(jsonString);
  students = students.list;
  
  students.forEach((student) => {
    let age = student.age;
    let prof = student.prof;
    let name = student.name;
    if (age && prof && name) {
      let student = new Student(name, age, prof);
      list.add(student);
    }
  });
  console.log(list);
