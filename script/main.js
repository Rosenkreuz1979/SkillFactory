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

function wrapMessage(msg,from) {
    if (msg) {
        let message = document.createElement('div');
        message.className = `message message-${from}`;
        message.innerHTML = msg;  
        if (chatMessages.querySelector(".empty-placeholder")){            
           chatMessages.innerHTML="";            
        }
        //chatMessages.insertBefore(message,chatMessages.firstChild);
        chatMessages.appendChild(message);

    }
 
}



let webSocket = new WebSocket(webURL);

webSocket.onopen = () => { wrapMessage("Server Connection Established","system") };

webSocket.onclose = () => { wrapMessage("Server Connection Closed","system") };

webSocket.onmessage = (event) => { 
    if (!(event.data.includes("My GeoLocation"))){ wrapMessage(event.data,"server")}};

webSocket.onerror = (event) => { wrapMessage(event.data,"error") };

chatSend.addEventListener('click', () => {
  let message = chatInput.value;
  if (message) {
    wrapMessage(message,"client");
    webSocket.send(message);
    chatInput.value='';
  }  else {
    wrapMessage("You cannot send an empty message to the server","error");
  }
});

chatGeo.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            let message = `<a href="https://www.openstreetmap.org/#map=17/${coords.latitude}/${coords.longitude}" target="_blank">My GeoLocation</a>`;
            wrapMessage(message,"geo");
            webSocket.send(message);
        });       
      } else {
        wrapMessage("Sorry, your browser does not support Geolocation requests","error");
      }
})

}