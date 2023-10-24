// INITIAL DATA
let square = {
    a1: '', a2: '', a2: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}

let playerTurn = ''
let warning = ''
let playing = false


// EVENTS 
document.querySelector('.reset').addEventListener('click', reset)


// FUNCTIONS

function reset() {
    warning = ''

    let random = math.floor(math.random() * 2)
    if(playerTurn === 0){
        player = 'x'
    } else {
        player = 'o'
    }
}






