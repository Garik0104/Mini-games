const board = document.querySelector('#board')
const colors = ['#c91d54', '#33d312e6', '#fd8638', '#ff0000e6', '#601a9bb0', '#2274bc', '00f8ffe6']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element) {
    element.style.backgroundColor = '#fff'
    element.style.boxShadow = `0 0 2px #fff`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}


