/* Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос». */

window.onload = () => {
    let content = document.querySelector('.content-wrapper');
    let storage = window.localStorage.getItem('gallery');
if (storage) {
    console.log(storage);
    displayPictures(JSON.parse(storage));
} 

 
 let button = document.querySelector('.submit');
 let pageField = document.querySelector('#page-field');
 let limitField = document.querySelector('#limit-field')

 let warning;
 let queryURL;
 
 function xhrRequest(url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
   
    xhr.onload = function() {
      if (xhr.status != 200) { 
        console.log(`Статус ответа: ${xhr.status}`);
      } else {    
        let jsonResult = JSON.parse(xhr.response);
        console.log(xhr.response);
        console.log('Ответ Получен');
        console.log(jsonResult);
        if (callback) {
            window.localStorage.setItem('gallery',xhr.response);
            callback(jsonResult);
        }        
      }
    };
 
    xhr.onerror = function() {
      console.log(`Ошибка! ${xhr.status}`);
    };
    
    xhr.send();
 }

/*
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.
 */
function checkRange(field) {
    if (+field.value < 1 || +field.value > 10 || isNaN(+field.value)){
        field.classList.add("error");
        return true;        
    } else {
        field.classList.remove("error");
        return false;
    }
}

button.addEventListener('click',()=> {
    pageField.classList.remove("error");
    limitField.classList.remove("error");
     if (checkRange(pageField) && checkRange(limitField)) {
        warning=`<div class="warning toggle">Номер страницы и лимит вне диапазона от 1 до 10</div>`;        
        content.innerHTML=warning;      
     } else if (checkRange(pageField)) {
         warning=`<div class="warning toggle">Номер страницы вне диапазона от 1 до 10</div>`;
         content.innerHTML=warning;        
     } else if (checkRange(limitField)){
        warning=`<div class="warning toggle">Лимит вне диапазона от 1 до 10</div>`;
        content.innerHTML=warning;   
     } else {    
         queryURL = `https://picsum.photos/v2/list?page=${pageField.value}&limit=${limitField.value}`;
         xhrRequest(queryURL,displayPictures);
        
     }
 })



function displayPictures(jsonData) {
    let tiles = '';
    
    jsonData.forEach(item => {
      const tileBlock = `
        <div class="tile">
          <img
            src="${item.download_url}"
            class="tile-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      tiles += tileBlock;
    });
    
    content.innerHTML = tiles;
  }
 
}