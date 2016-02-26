function spam(message, interval){
    setInterval(function(){
            document.getElementById("message-input").value=message;TS.view.submit();
        },interval);
}