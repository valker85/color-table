const board = document.querySelector('#board')
const colors = ['#0cb595', '#74bf45', '#ac59cf', '#5f72b7', '#c74d4d']
const SQUARES_NUMBER = 504

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseleave', ()=> removeColor(square))
    
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#b9b9b9'
    element.style.boxShadow = '0 0 2px rgb(119, 119, 119)'
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



