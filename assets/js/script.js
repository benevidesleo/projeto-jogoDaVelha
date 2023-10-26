// INITIAL DATA
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}

let playerTurn = ''
let warning = ''
let playing = false

reset()


// EVENTS 
document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})


// FUNCTIONS

function itemClick(event) {
    let item = event.target.getAttribute('data-item')
    if ( playing && square[item] === '') {
        square[item] = playerTurn
        renderSquare()
        turn()
    }
}

function reset() {
    warning = ''

    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
        playerTurn = 'x'
    } else {
        playerTurn = 'o'
    }


    for (let i in square) {
        square[i] = ''
    }

    playing = true

    renderSquare()
    renderinfo()
}

function renderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`)
        if (square[i] !== '') {
            item.innerHTML = square[i]
        } else {
            item.innerHTML = ''
        }
    }

    checkGame()
}

function renderinfo() {
    document.querySelector('.vez').innerHTML = playerTurn
    document.querySelector('.resultado').innerHTML = warning

}

function turn() {
    if (playerTurn === 'x') {
        playerTurn = 'o'
    } else {
        playerTurn = 'x'
    }
    renderinfo()
}

function checkGame() {
    if(checkWinner('x')) { 
        warning = 'O "x" venceu'
        playing = false
    } else if(checkWinner('o')) { 
        warning = 'O "o" venceu'
        playing = false
    } else if(notWinner()) { 
        warning = 'Deu empate'
        playing = false
    }
}

 function checkWinner(playerTurn) { 
    let posibility = [ 
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for(let w in posibility) { 
        let pArray = posibility[w].split(',')
        let hasWon = pArray.every(option => square[option] === playerTurn)
        if(hasWon) { 
            return true
        }
    }

    return false 
}

function notWinner() { 
    for (let i in square) { 
        if(square[i] === '') { 
            return false 
        }
    }

     return true
}
