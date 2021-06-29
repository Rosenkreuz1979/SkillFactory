/* Написать функцию, которая создает пустой объект, но без прототипа. */
function createNull() {
  let nullObject = new Object();
  return nullObject;
}

let newNullObject = createNull();

console.log(newNullObject);