const selectionButtons = document.querySelectorAll('[data-selection]');

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

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selections.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    console.log(computerSelection);
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * selections.length)
    return selections[randomIndex]
}