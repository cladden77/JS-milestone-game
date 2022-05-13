// Set up Variables
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');

// Create the 3 selection's names, emoji, and what each beats
const selections = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    },
]

// Set up event listener for when each button is selected
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selections.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

// event listener for clear button
document.querySelector('[data-clear-button]').addEventListener("click", clearScore);

// creating the functionality of winning or losing and displays score
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const youWin = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, youWin);

    if (youWin) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);
}

// adds 1 to the user's score or computer score
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

// creates a div to display the result and applies a 'winner'
// class that shows the winner selection larger than that of the loser
function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

// checks to see if the computer's random selection beats the user's selection
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

// allows the computer to randomly select one of the selections
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * selections.length)
    return selections[randomIndex]
}

function clearScore(scoreSpan) {



    document.querySelector('[data-computer-score]').innerText = 0;
    document.querySelector('[data-your-score]').innerText = 0;
}

