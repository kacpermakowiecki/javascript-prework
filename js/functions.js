function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
}
