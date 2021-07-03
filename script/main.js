window.onload = () => {
let button1 = document.querySelector(".button-arrow");
let button2 = document.querySelector(".button-size");
let icon1 = button1.querySelector(".button-icon");
let icon2 = button1.querySelector(".hidden-icon");

function switchVisibility(){
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
}


button1.addEventListener("click", function(){ //10-1
    switchVisibility();    
})

button2.addEventListener("click", () => { //10-2
    alert(`Размеры экрана: Ширина:${window.screen.width} Высота:${window.screen.height}`); //экран
   // alert(`Размеры окна: Ширина:${window.innerWidth} Высота:${window.innerHeight}`); //окно
})

/* Chat Realisation */
let webURL = "wss://echo.websocket.org/";


let chatSend = document.querySelector('.chat-send');
let chatGeo = document.querySelector('.chat-geo');
let chatInput = document.querySelector('.chat-input');
let chatMessages = document.querySelector('.chat-messages');

let webSocket;

function wrapMessage(msg,from) {
    if (msg) {
        let message = document.createElement('div');
        message.className = `message-${from}`;
        message.innerHTML = msg;  
        // message.innerHTML = `<div class="message-${from}">${msg}</div>`;
        if (chatMessages.querySelector(".empty-placeholder")){            
           chatMessages.innerHTML="";            
        }
        chatMessages.insertBefore(message,chatMessages.firstChild);
        
    }
 
}

wrapMessage("Hello there","server");
wrapMessage("Hi","client");
//wrapMessage("What are you up to?","server");
//wrapMessage("Nothing much","client");


/*btnOpen.addEventListener('click', () => {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    writeToScreen("CONNECTED");
  };
  websocket.onclose = function(evt) {
    writeToScreen("DISCONNECTED");
  };
  websocket.onmessage = function(evt) {
    writeToScreen(
      '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
  };
  websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };
});

btnClose.addEventListener('click', () => {
  websocket.close();
  websocket = null;
});

btnSend.addEventListener('click', () => {
  const message = 'Test message';
  writeToScreen("SENT: " + message);
  websocket.send(message);
});

*/

}