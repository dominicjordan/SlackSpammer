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
 
 function getAllUsernames() {
    var names = [];
    var members = parseInt(document.getElementById("member_count_title").getElementsByTagName("span")[0].innerHTML.replace('/', ''));
    for (var index = 1; index < members; index++) {
        var name = document.getElementsByClassName("channel_page_member_row")[index].getElementsByTagName("a")[1].innerHTML;
        names.push(name);
    }
    return names;
}

function dropAllToLow(number) {
    var users = getAllUsernames();
    users.forEach(function(e) {
        var msg = "@"+e+"--";
        spam(msg, number);
    });
}
