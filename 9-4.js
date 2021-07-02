/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

*/
window.onload = () => {
 let content = document.querySelector('.content-wrapper');
 let button = document.querySelector('.submit');
 let field1;
 let field2;
 let warning;
 let queryURL;
 
 function fetchRequest(url,callback){
    fetch(url)
    .then((response) => { displayPicture(response.url); })
    .catch(() => { console.log('error') });
 }

function checkField(formfield) {
    let field = document.querySelector('#'+formfield);
    field.classList.remove("error");
    if (+field.value < 100 || +field.value > 300 || isNaN(+field.value)) {
        warning=`<div class="warning toggle">одно из введенных чисел вне диапазона от 100 до 300.</div>`;
        content.innerHTML=warning;
        field.classList.add("error");
        return false;   
     } else {
        return field.value;        
     }

}

button.addEventListener('click',()=> {
    if ((field1=checkField("field1")) && (field2=checkField("field2"))) {
        queryURL=`https://picsum.photos/${field1}/${field2}`;
        fetchRequest(queryURL);
    }
 })

 function displayPicture(picture) {
     const tileBlock = `
        <div>
          <img
            src="${picture}"
            width="${field1}" height="${field2}"
          />          
        </div>
      `;
    
    content.innerHTML = tileBlock;
  }

}