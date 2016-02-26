document.addEventListener('DOMContentLoaded', function() {
   
    var plus = document.getElementById('startspamplus');
    var min = document.getElementById('startspammin');
    var stop = document.getElementById('stopspam');
    var input = document.getElementById('spam');
    
    input.value = localStorage.getItem("spamname");
    
 
    plus.addEventListener('click', function() {
          localStorage.setItem("spamname", input.value);
          stopSpam()
          spam("@" + input.value + ": ++", 500)
          
    }, false);
    
    min.addEventListener('click', function() {
          localStorage.setItem("spamname", input.value);
          stopSpam()
          spam("@" + input.value + ": --", 500)
    }, false);
    
    stop.addEventListener('click', function() {
        localStorage.setItem("spamname", input.value);
        stopSpam()
    }, false);
    
        
}, false);

var interval;

function sendMessage(message){
    chrome.tabs.executeScript({
        code: 'document.getElementById("message-input").value="'+message+'"; $;'
    });
}

function spam(message, time){
    interval = setInterval(function(){ 
        sendMessage(message) 
    }, time);
}

function stopSpam(){
    clearInterval(interval);
}
