var argButtonName, buttonRock;
buttonRock = document.getElementById('button-rock');
var argButtonName, buttonRock;
buttonPaper = document.getElementById('button-paper');
var argButtonName, buttonScissors;
buttonScissors = document.getElementById('button-scissors');


/**
 * Describe this function...
 */
 var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
	  return 'papier';
  } else if (argMoveId == 3) {
	  return 'nozyce'
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
  }

  function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove =='nozyce') {
    printMessage ('Wygrywasz!');
  } else if (argPlayerMove == 'nozyce' && argComputerMove =='papier') {
    printMessage ('Przegrywasz!');
  } else if (argPlayerMove == 'nozyce' && argComputerMove =='kamień') {
    printMessage ('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
	printMessage ('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove ) {
	printMessage ('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argPlayerMove + ', a Ty ' + argComputerMove);
  }
  
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień') });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier') });
buttonScissors.addEventListener('click', function(){ buttonClicked('nozyce') });