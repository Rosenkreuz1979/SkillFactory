/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число. */
window.onload = () => {
 let content = document.querySelector('.content-wrapper');
 let button = document.querySelector('.submit');
 let field = document.querySelector('.input-field');
 
button.addEventListener('click',()=> {
     if (+field.value < 1 || +field.value > 10) {
         console.log('В жопу иди');
         content.innerHTML= `Введенное число не попадает в желаемый промежуток. Проверьте правильность ввода`;
     } else if (isNaN(+field.value)) {
         console.log('Введите целочисленное значение от 1 до 10');
     }
 })



}
