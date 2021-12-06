const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});
const buttonPaper = document.getElementById(`button-paper`);
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
const buttonScissors = document.getElementById(`button-scissors`);
buttonScissors.addEventListener('click', function () {
  buttonClicked('nozyce');
});

function getMoveName(argMoveId) {
  console.log(`wywołano funkcję getMoveName z argumentem: ${argMoveId}`);
  if (argMoveId === 1) {
    return 'kamień';
  } else if (argMoveId === 2) {
    return 'papier';
  } else if (argMoveId === 3) {
    return 'nozyce';
  } else {
    printMessage(
      `Nie znam ruchu o id ${argMoveId} Zakładam, że chodziło o "kamień"`
    );
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    `wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${argComputerMove}`
  );
  if (argPlayerMove === 'papier' && argComputerMove === 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove === 'papier' && argComputerMove === 'nozyce') {
    printMessage('Przegrywasz!');
  } else if (argPlayerMove === 'kamień' && argComputerMove === 'nozyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove === 'nozyce' && argComputerMove === 'kamień') {
    printMessage('Przegrywasz!');
  } else if (argPlayerMove === 'nozyce' && argComputerMove === 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage(`Zagrałem ${argComputerMove} a Ty ${argPlayerMove}`);
}
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(`${argButtonName} został kliknięty`);

  const playerMove = argButtonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(`wylosowana liczba to: ${randomNumber}`);
  const computerMove = getMoveName(randomNumber);
  console.log(`ruch komputera to: ${computerMove}`);
  displayResult(playerMove, computerMove);
}
