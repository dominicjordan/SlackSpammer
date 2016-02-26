var interval;

 function sendMessage(message){
     document.getElementById("message-input").value=message;
     TS.view.submit();
 }

 function spam(message, time){
     interval = setInterval(function(){ sendMessage(message) }, time);
 }

 function stopSpam(){
     clearInterval(interval);
 }