
var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com/');

connection.onmessage=function(list){
    document.getElementById('view').innerHTML+='Server:' + list.data+ "</br>";
};

function loadWebSocket(){
    var message= document.getElementById('inputMessage').value;
    connection.send(message);
    }


