/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число. */
window.onload = () => {
 let content = document.querySelector('.content-wrapper');
 let button = document.querySelector('.submit');
 let field = document.querySelector('.input-field');
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
        console.log('Ответ Получен');
        if (callback) {
            callback(jsonResult);
        }        
      }
    };
 
    xhr.onerror = function() {
      console.log(`Ошибка! ${xhr.status}`);
    };
    
    xhr.send();
 }



button.addEventListener('click',()=> {
     if (+field.value < 1 || +field.value > 10) {
        warning=`<div class="warning toggle">Введенное число не попадает в желаемый промежуток. Проверьте правильность ввода</div>`;
        content.innerHTML=warning;      
     } else if (isNaN(+field.value)) {
         warning=`<div class="warning toggle">Вы ввели неверное значение. Введите <strong>число</strong> в диапазоне от 1 до 10</div>`;
         content.innerHTML=warning;        
     } else {
         queryURL = `https://picsum.photos/v2/list?limit=${field.value}`;
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